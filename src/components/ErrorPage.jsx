import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-4">Oops! Page Not Found.</p>
            <Link to="/" className="btn mt-6 px-4 py-2 bg-violateBanner text-white rounded-full">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;