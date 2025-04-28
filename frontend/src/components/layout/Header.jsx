import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Blog
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 