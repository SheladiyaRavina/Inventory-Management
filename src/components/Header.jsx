import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-fuchsia-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Inventory Pro</h1>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-200 transition duration-150">Dashboard</Link></li>
            <li><Link to="/add-item" className="hover:text-gray-200 transition duration-150">Add Item</Link></li>
            <li><Link to="/suppliers" className="hover:text-gray-200 transition duration-150">Suppliers</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;