import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl font-bold">
              Schooling
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 m-4">
            <a href="/" className="text-white hover:text-gray-200">Home</a>
            <a href="/about" className="text-white hover:text-gray-200">About</a>
            <a href="/courses" className="text-white hover:text-gray-200">Courses</a>
            <a href="/blog" className="text-white hover:text-gray-200">Blog</a>
            <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="/signup" className="bg-white text-black px-6 py-2 rounded-lg hover:bg-yellow-200 transition duration-300">
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
