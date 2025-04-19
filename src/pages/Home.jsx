import React, { useEffect } from 'react';
import Showcase from '../components/showcase';
import About from '../components/About';
import Services from '../components/Services';
import MissionCarousel from '../components/Mission';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { useLocation } from 'react-router-dom';
import { animateScroll as ScrollLink } from 'react-scroll';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      ScrollLink.scrollTo(targetId, {
        smooth: true,
        duration: 500,
        offset: -80, // Adjust as needed
      });
    }
  }, [location]);

  return (
    <>
      {/* showcase section */}
      <section id="home">
        <Showcase />
      </section>
      {/* about */}
      <section id="about">
        <About />
      </section>
      {/* services */}
      <section id="services">
        <Services />
      </section>
      {/* mission */}
      <section id="mission">
        <MissionCarousel />
      </section>
      {/* our team */}
      <section id="team">
        <Team />
      </section>
      {/* contact us */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;