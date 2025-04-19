import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailsPage = ({ phones }) => {
  const { id } = useParams();
  const phone = phones.find((p) => p.id === parseInt(id));
  const whatsappNumber = '+2348138804305';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello,%20I'm%20interested%20in%20buying%20the%20${phone?.name}.`;

  if (!phone) {
    return (
      <div className="py-20 text-center text-gray-800 dark:text-gray-200">
        Phone not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
          {phone.name}
        </h1>
        <div className="md:flex md:gap-10">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg p-4">
              <img
                src={phone.image}
                alt={phone.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Details
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {phone.description}
            </p>
            <p className="text-xl font-semibold text-green-600 dark:text-green-400 mb-6">
              Price: ₦{phone.priceNGN.toFixed(2)}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
            >
              Buy Now via WhatsApp
            </a>
            <div className="mt-6">
              <Link
                to="/phones"
                className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
              >
                ← Back to Phones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
