import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const missionVision = [
  {
    title: "Our Mission",
    description: "Delivering innovative mobile solutions with exceptional customer experience.",
  },
  {
    title: "Our Vision",
    description: "To become Nigeria's most trusted tech store with nationwide access.",
  },
  {
    title: "Our Promise",
    description: "Quality. Affordability. Satisfaction — Every time.",
  },
];

const MissionCarousel = () => {
  return (
    <section id="mission" name="mission" className="py-20 bg-gray-50 dark:bg-gray-900 text-center px-6 md:px-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-100"
      >
        Our <span className="text-blue-600 dark:text-blue-400">Values</span>
      </motion.h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="max-w-3xl mx-auto"
      >
        {missionVision.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MissionCarousel;
