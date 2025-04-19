import React from 'react';
import { Link } from 'react-router-dom';

const Phones = ({ phones }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Explore Our Mobile Phones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <Link to={`/phones/${phone.id}`}>
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center p-4">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {phone.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ₦{phone.priceNGN.toFixed(2)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phones;
