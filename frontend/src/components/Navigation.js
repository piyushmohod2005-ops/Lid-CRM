import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-purple-600">PiTaMi</div>
            <span className="text-sm text-gray-600 hidden sm:inline">Crochet Store</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search crochet items..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-purple-600 transition">
              Shop
            </Link>
            <Link to="/orders" className="text-gray-700 hover:text-purple-600 transition hidden sm:inline">
              Orders
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 hover:text-purple-600 transition">
              <FaShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* User */}
            {user ? (
              <Link to="/account" className="text-gray-700 hover:text-purple-600 transition">
                <FaUser size={20} />
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-purple-600 transition">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
