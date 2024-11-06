import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const { product_image, product_title, price, product_id } = product || {}
    return (

        <div className="card card-compact bg-base-100 w-76 transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden">
            <figure className="pt-4">
                <img className="h-[160px]"
                    src={product_image}
                    alt="products" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-start">
                    <Link to={`/product/${product_id}`} className="btn btn-sm btn-primary btn-outline rounded-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;