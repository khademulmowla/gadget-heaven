
const Footer = () => {
    return (
        <footer className=" py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-2">Gadget Heaven</h1>
                    <p className="text-sm text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
                </div>

                <div className="border-t border-gray-200 my-6"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <nav>
                        <h2 className="text-xl font-bold mb-4">Services</h2>
                        <ul className="space-y-2 text-gray-500 text-base">
                            <li><a className="link link-hover">Product Support</a></li>
                            <li><a className="link link-hover">Order Tracking</a></li>
                            <li><a className="link link-hover">Shipping & Delivery</a></li>
                            <li><a className="link link-hover">Returns</a></li>
                        </ul>
                    </nav>

                    <div>
                        <h2 className="text-xl font-bold mb-4">Company</h2>
                        <ul className="space-y-2 text-gray-500 text-base">
                            <li><a className="link link-hover">About Us</a></li>
                            <li><a className="link link-hover">Careers</a></li>
                            <li><a className="link link-hover">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">Legal</h2>
                        <ul className="space-y-2 text-gray-500 text-base">
                            <li><a className="link link-hover">Terms of Service</a></li>
                            <li><a className="link link-hover">Privacy Policy</a></li>
                            <li><a className="link link-hover">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;