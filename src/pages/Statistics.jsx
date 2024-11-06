import Headstat from "../components/Headstat";
import { Helmet } from 'react-helmet-async';
import React from 'react';
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        product_title: "UltraBook X1",
        price: 1199.99,
        rating: 4.5,
    },
    {
        product_title: "Fitness Smart Watch",
        price: 179.99,
        rating: 4.4,
    },
    {
        product_title: "Gaming Laptop G15",
        price: 1499.99,
        rating: 4.6,
    },
    {
        product_title: "iPhone 14 Pro",
        price: 1099.99,
        rating: 4.9,
    },
    {
        product_title: "MacBook Pro 16",
        price: 2499.99,
        rating: 4.8,
    },
    {
        product_title: "Galaxy Smartphone Pro",
        price: 899.99,
        rating: 4.8,
    },
    {
        product_title: "Aspire E15",
        price: 799.99,
        rating: 4.3,
    },
    {
        product_title: "Pro Smart Watch",
        price: 249.99,
        rating: 4.3,
    },
    {
        product_title: "Surface Laptop 4",
        price: 1599.99,
        rating: 4.7,
    },
    {
        product_title: "ThinkPad X1 Carbon",
        price: 1799.99,
        rating: 4.9,
    }
];

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics - Gadget Heaven</title>
                <meta name="description" content="View product statistics and trends on Gadget Heaven." />
            </Helmet>
            <Headstat />
            <ResponsiveContainer width="100%" height={500}>
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 20,

                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="product_title" angle={-5} textAnchor="end" interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="price" barSize={20} fill="#413ea0" />

                    <Scatter dataKey="rating" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
