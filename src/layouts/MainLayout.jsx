import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            {/* navbar  */}
            <Navbar></Navbar>
            <div className="min-h-screen">
                {/* dynamic section  */}
                <Outlet></Outlet>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;