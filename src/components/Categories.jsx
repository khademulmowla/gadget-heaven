import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div className="flex flex-col space-y-4 pt-10 justify-center shadow-xl pb-10 rounded-xl items-center bg-[#FFFFFF]">
            <NavLink
                to="/" className={({ isActive }) =>
                    `btn font-semibold py-2 rounded-full w-40 ${isActive ? "bg-violateBanner text-white"
                        :
                        "bg-gray-200 text-black"}`}>
                All Products
            </NavLink>
            {categories.map(category => (
                <NavLink
                    key={category.category}
                    to={`/category/${category.category}`}
                    className={({ isActive }) =>
                        `btn font-semibold py-2 rounded-full w-40 ${isActive ? "bg-violateBanner text-white"
                            :
                            "bg-gray-200 text-black"}`
                    }>
                    {category.category}
                </NavLink>
            ))}


        </div>
    );
};

export default Categories;