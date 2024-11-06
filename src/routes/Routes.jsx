import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../components/ErrorPage";
import ContactUs from "../pages/Contactus";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <ProductCards />,
                        loader: () => fetch('../products.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <ProductCards />,
                        loader: () => fetch('../products.json'),
                    }
                ]
            },

            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                loader: () => fetch('../products.json'),


            },
            {
                path: '/product/:product_id',
                element: <ProductDetails />,
                loader: () => fetch('../products.json'),
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            }
        ]
    }
])
export default routes