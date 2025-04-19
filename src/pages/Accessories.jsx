import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaStar, FaRegStar, FaWhatsapp } from 'react-icons/fa';
import fastCharger from "../assets/img/fastcharger.png";
import temperedGlass from "../assets/img/temperedGlass.jpg";
import blueSpaker from "../assets/img/blueSpeaker.jpg";
import leatherCase from "../assets/img/leatherCase.jpg";
import carMount from "../assets/img/carMount.jpg";
import powerBank from "../assets/img/powerbank.jpg";
import phoneStand from "../assets/img/phoneStand.jpg";

const Accessories = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      priceNGN: 7500.00,
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg',
      category: 'audio',
      brand: 'SoundMaster'
    },
    {
      id: 2,
      name: 'Fast Charger 30W',
      priceNGN: 3500.00,
      rating: 4.2,
      image: fastCharger,
      category: 'charging',
      brand: 'PowerUp'
    },
    {
      id: 3,
      name: 'Tempered Glass Screen Protector',
      priceNGN: 1500.00,
      rating: 4.7,
      image: temperedGlass,
      category: 'protection',
      brand: 'ShieldTech'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      priceNGN: 6500.00,
      rating: 4.3,
      image: blueSpaker,
      category: 'audio',
      brand: 'BoomAudio'
    },
    {
      id: 5,
      name: 'Phone Stand Holder',
      priceNGN: 22000.00,
      rating: 4.0,
      image: phoneStand,
      category: 'accessories',
      brand: 'FlexiHold'
    },
    {
      id: 6,
      name: 'Premium Leather Case',
      priceNGN: 1500.00,
      rating: 4.8,
      image: leatherCase,
      category: 'protection',
      brand: 'LuxCase'
    },
    {
      id: 7,
      name: 'Magnetic Car Mount',
      priceNGN: 28000.00,
      rating: 4.1,
      image: carMount,
      category: 'accessories',
      brand: 'AutoGrip'
    },
    {
      id: 8,
      name: 'Power Bank 10000mAh',
      priceNGN: 12000.00,
      rating: 4.6,
      image: powerBank,
      category: 'charging',
      brand: 'PowerUp'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  const brands = [...new Set(products.map(product => product.brand))];
  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.priceNGN - b.priceNGN;
    if (sortOption === 'price-high') return b.priceNGN - a.priceNGN;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0;
  });

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return <div className="flex items-center">{stars} <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">({rating})</span></div>;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full py-5 px-6 z-10 shadow-md bg-blue-700 text-white dark:bg-blue-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">Premium Accessories</h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="py-20 px-6 mt-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white dark:bg-gradient-to-r dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-6">Discover a wide range of top-quality phone accessories to enhance your mobile experience.</p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for accessories..."
              className="w-full py-3 px-4 pr-12 rounded-full focus:outline-none text-gray-700 shadow-sm dark:bg-gray-700 dark:text-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaSearch className="text-lg text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-5 text-gray-700 dark:text-gray-200">Filter Options</h2>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-600 dark:text-gray-300">Category</h3>
              <select
                className="w-full p-2 border rounded-md focus:outline-none text-gray-700 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-600 dark:text-gray-300">Brand</h3>
              <select
                className="w-full p-2 border rounded-md focus:outline-none text-gray-700 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="all">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-gray-600 dark:text-gray-300">Sort By</h3>
              <select
                className="w-full p-2 border rounded-md focus:outline-none text-gray-700 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>

            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSortOption('featured');
              }}
              className="w-full py-2 px-4 rounded-md transition-colors focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 shadow-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
            >
              Reset Filters
            </button>
          </aside>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {selectedCategory === 'all' ? 'Featured Accessories' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
              </h2>
              <span className="text-sm text-gray-600 dark:text-gray-400">{sortedProducts.length} items</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="object-contain h-full w-full" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-200">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.brand}</p>
                    <div className="mb-2">{renderRating(product.rating)}</div>
                    <p className="font-bold text-blue-600 dark:text-blue-400 mb-3">₦{product.priceNGN.toLocaleString()}</p>
                    <a
                      href={`https://wa.me/?text=I%20want%20to%20buy%20${product.name}%20for%20₦${product.priceNGN.toLocaleString()}`}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 text-sm"
                    >
                      <FaWhatsapp /> <span className="">Buy on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accessories;