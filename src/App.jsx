import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accessories from './pages/Accessories';
import Phones from './pages/Phones';
import Repair from './pages/Repair';
import Development from './pages/Developtment';
import Crypto from './pages/Crypto';
import DetailsPage from './pages/detailsPage';
import ErrorPage from './pages/ErrorPage'; // Import the ErrorPage component
import tecnoLogo from './assets/img/tecno.jpg'
import itelLogo from './assets/img/itelPhone.jpg';
import iphoneLogo from './assets/img/iphone.jpg';
import xiomiLogo from './assets/img/xiomi.jpg';


const phonesData = [
  {
    id: 101,
    name: 'tecno phone',
    priceNGN: 150000.00,
    image: tecnoLogo,
    description: 'A powerful smartphone with a stunning display and advanced camera system.'
  },
  {
    id: 102,
    name: 'itel Phones',
    priceNGN: 55000.00,
    image: itelLogo,
    description: 'An affordable smartphone with essential features for everyday use.'
  },
  {
    id: 103,
    name: 'Iphone phone',
    priceNGN: 95000.00,
    image: iphoneLogo,
    description: 'A well-rounded smartphone offering a balance of performance and features.'
  },
  {
    id: 103,
    name: 'Xiomi Redmi',
    priceNGN: 95000.00,
    image: xiomiLogo,
    description: 'A well-rounded smartphone offering a balance of performance and features.'
  },

  // Add more phone data here
];

function App() {
  return (
    <Router>
      {/* Header stays visible across pages */}
      <Header />

      {/* All routes go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/phones" element={<Phones phones={phonesData}/>} />
        <Route path="/phones/:id" element={<DetailsPage phones={phonesData} />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/development" element={<Development />} />
        <Route path="/crypto" element={<Crypto />} />
        {/* This route will catch any path that doesn't match the ones above */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* footer */}
      <Footer />
    </Router>
  );
}

export default App;