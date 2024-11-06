import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isWhiteNavbar = location.pathname.includes("/product/") || location.pathname === "/dashboard" || location.pathname === "/statistics";

    return (
        <div className={`navbar rounded-t-xl  px-4 ${isWhiteNavbar ? 'bg-white text-black' : 'bg-violateBanner text-white'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base font-semibold">
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/dashboard">Dashboard</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/statistics">Statistics</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/contact-us">Contact Us</NavLink>
                    </ul>
                </div>
                <Link className="text-xl font-bold">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-base font-semibold">
                    <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/dashboard">Dashboard</NavLink>
                    <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-accent' : 'hover:text-accent'}`} to="/contact-us">Contact Us</NavLink>

                </ul>
            </div>
            <div className="navbar-end gap-4">
                <i className="fa-solid fa-cart-shopping bg-white text-black text-xl border-2 rounded-full h-8 w-8 p-3 flex items-center justify-center"></i>
                <i className="fa-regular bg-white text-black fa-heart text-xl border-2 rounded-full h-8 w-8 p-3 flex items-center justify-center"></i>
            </div>
        </div>
    );
};

export default Navbar;
