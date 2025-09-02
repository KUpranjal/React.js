import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex gap-6 justify-center">
        <Link
          to="/counter"
          className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300"
        >
          Counter
        </Link>
        <Link
          to="/input"
          className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300"
        >
          Input
        </Link>
        <Link
          to="/hp"
          className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300"
        >
          HP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
