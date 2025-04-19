import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import operaImg from "../assets/img/opera.jpg";
import abduImg from "../assets/img/abdu.jpg";
import adamuImg from "../assets/img/adamu.jpg";
import ahmadImg from "../assets/img/ahmad.jpg";

const team = [
  {
    name: "Abubakar Mohammed a.k.a opera",
    role: "Founder & CEO",
    image: operaImg,
    social: {
      twitter: "https://twitter.com/yourhandle",
      facebook: "https://facebook.com/yourhandle",
      whatsapp: "+2348138804305", // only numbers, no plus sign
    },
  },
  {
    name: "Adamu mohammed Aliyu",
    role: "Operations Lead",
    image: adamuImg,
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      whatsapp: "+23407042818174",
    },
  },
  {
    name: "Abduljalal sani",
    role: "Head of Sales",
    image: abduImg,
    social: {
      twitter: "https://twitter.com/",
      facebook: "https://facebook.com/",
      whatsapp: "+2347044265812",
    },
  },
  {
    name: "Ahmad Ibrahim",
    role: "Software Developer",
    image: ahmadImg,
    social: {
      twitter: "https://twitter.com/ahmadkhan03",
      facebook: "https://facebook.com/el.ahmed5",
      whatsapp: "+2348164336141",
    },
  },
];

const TeamSection = () => (
  <section
    id="team"
    name="team"
    className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-20"
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12"
      >
        Meet the{" "}
        <span className="text-blue-600 dark:text-blue-400">Team</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-blue-600 dark:text-blue-400">{member.role}</p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-white flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-white flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://wa.me/${member.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-white flex items-center justify-center hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
