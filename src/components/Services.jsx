// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import softwareDev from "../assets/img/softwaredev.png";
import accessoriesLogo from "../assets/img/accessories.png";
import mobilePhone from "../assets/img/mobilePhone.png";
import phoneRepair from "../assets/img/repair.png";
import cryptoLogo from "../assets/img/crypto.png";

const services = [
  {
    title: "Phone Accessories",
    text: "Wide variety of accessories to personalize and protect your device — from cases to screen guards and more.",
    img: accessoriesLogo,
    link: "/accessories",
  },
  {
    title: "Mobile Phones",
    text: "Explore our range of the latest smartphones with cutting-edge features and unbeatable performance.",
    img: mobilePhone,
    link: "/phones",
  },
  {
    title: "Phone Repair",
    text: "Get fast, reliable repair services for broken screens, battery issues, software problems, and more.",
    img: phoneRepair,
    link: "/repair",
  },
  {
    title: "Software Development",
    text: "We build innovative web and mobile applications tailored to your business goals and user needs.",
    img: softwareDev,
    link: "/development",
  },
  {
    title: "Crypto Influencer",
    text: "Join the crypto revolution with expert content, trend analysis, and trusted project recommendations.",
    img: cryptoLogo,
    link: "/crypto",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      name="services"
      className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white"
        >
          Our <span className="text-blue-600 dark:text-blue-400">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <Link to={service.link} className="block">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {service.text}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
