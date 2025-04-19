import React from 'react';

const Development = () => {
  const whatsappNumber = '+234XXXXXXXXXX'; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello,%20I'd%20like%20to%20hire%20a%20developer.`;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
          Web & Mobile Development Services
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Bringing Your Digital Ideas to Life
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our development services page! We are a team of passionate and skilled developers dedicated to crafting high-quality web and mobile applications tailored to your unique needs. Whether you're a startup with a groundbreaking idea or an established business looking to enhance your digital presence, we have the expertise to turn your vision into reality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Our Development Expertise Includes:
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li><strong>Front-End Development:</strong> Creating engaging and user-friendly interfaces using technologies like React, Angular, Vue.js, and HTML/CSS.</li>
            <li><strong>Back-End Development:</strong> Building robust and scalable server-side logic with Node.js, Python, Java, and PHP.</li>
            <li><strong>Mobile App Development:</strong> Developing native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift/Kotlin.</li>
            <li><strong>E-commerce Solutions:</strong> Building secure and feature-rich online stores with platforms like Shopify, WooCommerce, and custom solutions.</li>
            <li><strong>API Development & Integration:</strong> Designing and integrating APIs to connect various systems and services seamlessly.</li>
            <li><strong>Database Design & Management:</strong> Creating efficient and well-structured databases using technologies like PostgreSQL, MySQL, MongoDB.</li>
            <li><strong>Cloud Services:</strong> Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Azure.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li><strong>Experienced Developers:</strong> Our team comprises seasoned professionals with a proven track record of delivering successful projects.</li>
            <li><strong>Client-Focused Approach:</strong> We prioritize understanding your goals and collaborating closely with you throughout the development process.</li>
            <li><strong>Quality and Reliability:</strong> We are committed to writing clean, well-documented, and maintainable code.</li>
            <li><strong>Agile Development:</strong> We utilize agile methodologies to ensure flexibility, transparency, and iterative progress.</li>
            <li><strong>Scalable Solutions:</strong> We build applications with scalability in mind to accommodate your future growth.</li>
            <li><strong>Timely Delivery:</strong> We strive to deliver projects on time and within budget.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We'd love to learn more about your development needs and how we can help. Click the link below to get in touch with our team directly via WhatsApp.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Hire a Developer via WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
};

export default Development;