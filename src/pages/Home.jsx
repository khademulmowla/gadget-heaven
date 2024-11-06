import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
                <meta name="description" content="View product statistics and trends on Gadget Heaven." />
            </Helmet>
            <Banner />
            <div>
                <div className="grid gird-cols-1 md:grid-cols-4 gap-4 px-16 mt-80 mb-10">
                    <div className="md:col-span-1 border rounded-xl md:h-[320px]">
                        <Categories categories={categories} />
                    </div>
                    <div className="md:col-span-3 border rounded-xl ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;