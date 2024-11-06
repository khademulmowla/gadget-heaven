import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredCartList, getStoredWishList, addToStoredCartList, removeFromStoredCartList, removeFromStoredWishList, clearStoredCart } from "../utility/addToLs";

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [activeTab, setActiveTab] = useState("cart");
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList().map(id => parseInt(id));
        const cartItems = allProducts.filter(product => storedCartList.includes(product.product_id));
        setCartList(cartItems);
    }, [allProducts]);

    useEffect(() => {
        const storedWishList = getStoredWishList().map(id => parseInt(id));
        const wishItems = allProducts.filter(product => storedWishList.includes(product.product_id));
        setWishList(wishItems);
    }, [allProducts]);

    useEffect(() => {
        const newTotalPrice = cartList.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(newTotalPrice);
    }, [cartList]);

    const sortCartByPriceDescending = () => {
        const sortedCart = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCart);
    };

    const handleDeleteFromCart = (id) => {
        removeFromStoredCartList(id);
        setCartList(prevList => prevList.filter(item => item.product_id !== id));
    };

    const handleDeleteFromWishList = (id) => {
        removeFromStoredWishList(id);
        setWishList(prevList => prevList.filter(item => item.product_id !== id));
    };

    const handleAddToCartFromWishlist = (id) => {
        addToStoredCartList(id);
        const itemToAdd = wishList.find(item => item.product_id === id);
        if (itemToAdd) {
            setCartList(prevList => [...prevList, itemToAdd]);
            handleDeleteFromWishList(id);
        }
    };

    const handlePurchase = () => {
        setShowModal(true);
        clearStoredCart();
        setCartList([]);
        setTotalPrice(0);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <div>
            <div className="bg-violateBanner min-h-[100px] flex justify-center py-4">
                <div className="text-center">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                        <p className="py-2">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                        <button onClick={() => setActiveTab("cart")} className={`btn ${activeTab === "cart" ? "btn bg-white text-violateBanner" : "btn-outline text-white"} btn-sm rounded-full w-32`}>
                            Cart
                        </button>
                        <button onClick={() => setActiveTab("wishlist")} className={`btn ${activeTab === "wishlist" ? "btn bg-white text-violateBanner" : "btn-outline text-white"} btn-sm rounded-full w-32`}>
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[400px] p-6">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">{activeTab === "cart" ? "Cart" : "Wish List"}</h1>
                    </div>

                    {activeTab === "cart" && (
                        <div className="flex items-center gap-3">
                            <p>Total Cost: ${totalPrice.toFixed(2)}</p>
                            <button onClick={sortCartByPriceDescending} className="btn btn-sm btn-primary btn-outline rounded-full">
                                Sort by Price <i className="fa-solid fa-sort"></i>
                            </button>
                            <button
                                onClick={handlePurchase}
                                disabled={cartList.length === 0 || totalPrice === 0}
                                className="btn btn-sm bg-violateBanner rounded-full text-white"
                            >
                                Purchase
                            </button>
                        </div>
                    )}
                </div>
                <ul>
                    {(activeTab === "cart" ? cartList : wishList).map((product) => (
                        <div key={product.product_id} className="flex border rounded-xl justify-between p-3 m-4">
                            <div className="flex gap-4">
                                <img className="h-24 w-36 rounded-xl" src={product.product_image} alt={product.product_title} />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold">{product.product_title}</h3>
                                    <h4 className="text-gray-500 text-sm">{product.description}</h4>
                                    <h4 className="text-gray-700 font-semibold">Price: ${product.price}</h4>
                                    {activeTab === "wishlist" && (
                                        <button onClick={() => handleAddToCartFromWishlist(product.product_id)} className="btn btn-sm w-32 text-white bg-violateBanner">
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <button onClick={() => activeTab === "cart" ? handleDeleteFromCart(product.product_id) : handleDeleteFromWishList(product.product_id)} className="font-bold text-2xl text-red-600">
                                    <i className="fa-regular fa-circle-xmark"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>

            {/* Modal for Purchase Confirmation */}
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-2xl font-semibold">Congratulations!</h2>
                        <p>Your purchase was successful.</p>
                        <div className="modal-action">
                            <button onClick={handleCloseModal} className="btn">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
