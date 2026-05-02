import React from 'react';
import { FaBars, FaBell, FaUser } from 'react-icons/fa';

const TopBar = ({ onToggleSidebar }) => {
  return (
    <div className="bg-white shadow h-16 flex items-center justify-between px-6">
      <button
        onClick={onToggleSidebar}
        className="text-gray-600 hover:text-gray-900 transition"
      >
        <FaBars size={24} />
      </button>

      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900 transition relative">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="hidden sm:inline">Admin</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
