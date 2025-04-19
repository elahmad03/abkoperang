import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch, FiMoon, FiSun } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Close search box if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "team", label: "Our Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 relative">
        {/* Logo */}
        <RouterLink to="/">
          <img src={Logo} alt="Logo" className="w-40 sm:w-52" />
        </RouterLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer transition-colors"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.id}
                to={`/#${item.id}`}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-sm transition-colors duration-300"
          >
            <FiSearch size={20} />
          </button>

          {/* Dark Mode Toggler */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-sm transition-colors duration-300"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-sm transition-colors duration-300"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Input */}
        {showSearch && (
          <div
            ref={searchRef}
            className="absolute top-full mt-2 right-4 bg-white dark:bg-gray-800 shadow-md rounded-md p-2 w-64 z-50"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white dark:bg-gray-900 space-y-4">
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.id}
                to={`/#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
