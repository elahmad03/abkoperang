import { useEffect, useState } from 'react';
import { FaFacebook, FaXTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-10 relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Abk Opera Global Nigeria Ltd</h3>
          <p className="text-gray-300">
            At Abk opera Global Nigeria Ltd, we are your go-to destination for comprehensive mobile solutions.
            Whether you're in need of phone repairs, phone flashing services, or top-quality
            phone accessories,crypto related projects, software developtment we've got you covered.
          </p>
        </div>

        {/* Right Column - Follow Us */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.fb.com/profile.php?id=100021496521892" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="http://www.x.com/Abubaka36533120" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-white transition-colors" />
            </a>
            <a href="https://wa.me/+2348138804305" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition-colors" />
            </a>
            <a href="http://www.linkedin.com/in/abubakar-mohammed-158822228" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10">
    Developed & Designed by{' '}
    <a
      href="https://www.facebook.com/el.ahmed5"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      AhmadGlobe
    </a>
  </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-700 text-white text-xl px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
