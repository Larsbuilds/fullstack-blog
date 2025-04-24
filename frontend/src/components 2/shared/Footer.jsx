import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} BlogHub. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 