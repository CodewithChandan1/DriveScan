import React from 'react';
import Search from "../assets/svg/searching.svg"
const NoDataCard = () => {
    return (
        <div className="w-full  p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Welkin</h1>
            <img
                src={Search}
                alt="Welkin Logo"
                className="w-24 h-24 object-cover mb-6"
            />
            <p className="text-lg text-gray-600 text-center">
                Your search data will appear here.
            </p>
        </div>
    );
};

export default NoDataCard;
