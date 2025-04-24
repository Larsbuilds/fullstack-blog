import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Blog
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/create" className="hover:text-gray-300">
              Create Post
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 