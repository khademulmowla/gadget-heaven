import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(product => product.category === category)
            setProducts(filteredByCategory)
        }
        else {
            setProducts(data)
        }
    }, [category, data])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4">
            {products.length > 0 ? (
                products.map(product => <Card key={product.product_id} product={product} />)
            ) : (
                <div className="col-span-full text-center py-8">
                    <p className="text-4xl font-bold text-violateBanner">No products found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default ProductCards;