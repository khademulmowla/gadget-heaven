import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Headbar from "../components/Headbar";
import { addToStoredCartList, addToStoredWishList, getStoredWishList } from "../utility/addToLs";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async';

const ProductDetails = () => {
    const data = useLoaderData();
    const { product_id } = useParams();
    const [product, setProduct] = useState({});
    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        const singleProduct = data.find(product => product.product_id == product_id);
        setProduct(singleProduct);

        const storedWishList = getStoredWishList();
        if (storedWishList.includes(product_id)) {
            setIsWishlisted(true);
        }
    }, [product_id, data]);

    const { product_image, product_title, price, description, Specification, rating } = product;

    const handleAddToCart = (id) => {
        addToStoredCartList(id);
        toast.success("Product added to Cart!", {
            position: "top-center",
        });
    };

    const handleWishList = (id) => {
        if (!isWishlisted) {
            addToStoredWishList(id);
            setIsWishlisted(true);
            toast.success("Added to wishlist!", {
                position: "top-center"
            });
        }
    };

    return (
        <div className="relative">
            <Helmet>
                <title>ProductDetails | Gadget Heaven</title>
            </Helmet>
            <Headbar />
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-[900px] mx-auto absolute -bottom-60 left-1/2 transform -translate-x-1/2 container">
                <div className="md:w-1/2 h-[350px]">
                    <img src={product_image} alt="Product Image" className="w-full h-[350px] p-6" />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col space-y-1">
                    <h2 className="text-2xl font-semibold text-gray-800">{product_title}</h2>
                    <p className="text-xl text-gray-600 font-semibold">Price: ${price}</p>
                    {product.availability ? (
                        <Link className="btn w-2/6 btn-sm btn-primary btn-outline rounded-full mt-4">In Stock</Link>
                    ) : (
                        <span className="text-red-500 font-semibold mt-4">Not Available</span>
                    )}
                    <p className="text-gray-600 text-sm">{description}</p>
                    <div className="mt-4">
                        <h1 className="font-semibold">Specification:</h1>
                        {Specification && Specification.length > 0 ? (
                            Specification.map((spec, index) => (
                                <p key={index} className="text-gray-500 text-sm">{index + 1}. {spec}</p>
                            ))
                        ) : (
                            <p className="text-gray-500">No specifications available</p>
                        )}
                    </div>

                    <div>
                        <h1 className="font-semibold">Rating:</h1>
                        <div className="flex items-center">
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-200" />
                            </div>
                            <span className="text-lg font-semibold text-gray-700 ml-2">{rating}</span>
                        </div>
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        <button onClick={() => handleAddToCart(product_id)} className="btn bg-violateBanner text-white px-4 py-1 rounded-full">
                            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button onClick={() => handleWishList(product_id)} disabled={isWishlisted}>
                            <i className={`fa-solid fa-heart text-xl border-2 rounded-full h-8 w-8 p-3 flex items-center justify-center ${isWishlisted ? "text-gray-400" : ""}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
