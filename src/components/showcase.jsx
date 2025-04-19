import { FiArrowRight } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Showcase = () => {
  return (
    <section style={{ backgroundImage: `url('/img/showcase.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100%', position: 'relative' }}>
      {/* Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 10 }}></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
          Upgrade Your <span style={{ color: 'lightblue' }}>Tech</span> Game
        </h1>
        <p style={{ color: 'lightgray', fontSize: '1.2rem', maxWidth: '80%', marginBottom: '2rem' }}>
          Premium phones & accessories at unbeatable prices. Free shipping on all orders.
        </p>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          offset={-70}
          className="inline-block" // Keep this for potential external styling
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
            Explore More
            <FiArrowRight style={{ marginLeft: '0.5rem', transform: 'translateX(0)', transition: 'transform 0.3s ease' }} />
          </button>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Showcase;