import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" name="about" className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-20 transition-all duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          About <span className="text-blue-600 dark:text-blue-400">Us</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300"
        >
          
          Welcome to <strong>A.B.K NG LTD</strong>, your trusted destination for premium smartphones, cutting-edge accessories, and unbeatable deals. With a passion for innovation and customer satisfaction, we’re here to make technology accessible and enjoyable for everyone.
        </motion.p>

       </div>
    </section>
  );
};

export default About
