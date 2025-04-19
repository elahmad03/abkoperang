import React from 'react';
import { Link } from 'react-router-dom'; // If you want to integrate with your routing

// Replace with the actual path to your technician background image
import technicianBg from '../assets/img/repair.png';

const RepairPage = () => {
  const whatsappNumber = '+2348138804305'; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello,%20I'd%20like%20to%20book%20a%20phone%20repair%20appointment.`;

  return (
    <div className="bg-gray-100 py-16 mt-20"> {/* Added mt-20 for top margin */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Hero Section with Background and Overlay */}
        <div
          className="relative py-24 px-8 text-white text-center"
          style={{
            backgroundImage: `url(${technicianBg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-indigo-500 opacity-70"></div> {/* Overlay */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">Your Trusted Phone Repair Experts</h1>
            <p className="text-lg opacity-90">Fast, reliable, and professional phone repair services.</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 py-10">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Phone Repair Services?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In today's fast-paced world, a malfunctioning phone can disrupt your entire day. We understand the importance of a quick and efficient repair service. Our team of skilled technicians is equipped to handle a wide range of phone issues, from cracked screens and battery replacements to software glitches and water damage.
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li className="mb-2"><strong>Expert Technicians:</strong> Our engineers have years of experience and undergo continuous training to stay updated with the latest phone technologies.</li>
              <li className="mb-2"><strong>Quality Parts:</strong> We use only high-quality replacement parts to ensure the longevity and optimal performance of your repaired device.</li>
              <li className="mb-2"><strong>Fast Turnaround Time:</strong> We strive to complete most repairs quickly, often within the same day, minimizing your downtime.</li>
              <li className="mb-2"><strong>Transparent Pricing:</strong> You'll receive a clear and upfront quote before any work begins, with no hidden fees.</li>
              <li className="mb-2"><strong>Warranty on Repairs:</strong> We stand behind our work and offer a warranty on most repairs for your peace of mind.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Phone Issues We Fix:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Screen Repair & Replacement</h3>
                <p className="text-gray-600 leading-relaxed">Cracked or shattered screen? We can replace it with a new, high-quality display.</p>
              </div>
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Battery Replacement</h3>
                <p className="text-gray-600 leading-relaxed">Is your battery draining quickly or not holding a charge? We can install a new, genuine battery.</p>
              </div>
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Charging Port Repair</h3>
                <p className="text-gray-600 leading-relaxed">Having trouble charging your phone? We can diagnose and repair or replace the charging port.</p>
              </div>
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Water Damage Repair</h3>
                <p className="text-gray-600 leading-relaxed">Accidentally got your phone wet? Our experts can assess and attempt to repair water damage.</p>
              </div>
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Software Issues</h3>
                <p className="text-gray-600 leading-relaxed">Experiencing software glitches, freezing, or crashing? We can troubleshoot and resolve various software problems.</p>
              </div>
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Camera Repair</h3>
                <p className="text-gray-600 leading-relaxed">Is your phone camera not working correctly? We can repair or replace faulty camera modules.</p>
              </div>
            </div>
          </section>

          {/* Appointment Section */}
          <section className="text-center py-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Schedule Your Phone Repair Appointment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ready to get your phone fixed? Click the link below to chat with one of our engineers on WhatsApp and schedule your appointment.
            </p>
            <Link
              to={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Book an Engineer via WhatsApp
            </Link>
            {/* Optional: Link to a dedicated contact or appointment page */}
            {/* <p className="mt-4 text-sm text-gray-600">
              Or <Link to="/contact" className="text-blue-500 hover:underline">contact us</Link> through our website.
            </p> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default RepairPage;