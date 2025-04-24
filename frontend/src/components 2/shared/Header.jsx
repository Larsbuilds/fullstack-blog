import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            <span className="text-blue-600">Blog</span>Hub
          </Link>
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/create" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Post
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 