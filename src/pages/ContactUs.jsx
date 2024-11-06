import { useState } from "react";
import { Helmet } from 'react-helmet-async';


const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <Helmet>
                <title>ContactUs | Gadget Heaven</title>
                <meta name="description" content="View product statistics and trends on Gadget Heaven." />
            </Helmet>
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>
            {submitted ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-500">Thank you for contacting us, {name}!</h2>
                    <p className="text-gray-600">We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows="5"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-4 px-6 py-3 bg-violateBanner text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                            disabled={!name || !email || !message}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactUs;
