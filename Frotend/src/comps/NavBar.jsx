import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-blue-900' : 'bg-black bg-opacity-15'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/images/logo.jpeg" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/course" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">course</Link>
              <Link to="/mentorship" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">mentorship</Link>
              <Link to="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">about</Link>
              <Link to="/register" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
              <Link to="/login" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/course" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">course</Link>
            <Link to="/mentorship" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">mentorship</Link>
            <Link to="/about" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">about</Link>
            <Link to="/register" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
            <Link to="/login" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            
      
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;