import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Sidebar = ({ open }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: FaTachometerAlt, label: 'Dashboard', path: '/admin' },
    { icon: FaBox, label: 'Products', path: '/admin/products' },
    { icon: FaShoppingCart, label: 'Orders', path: '/admin/orders' },
    { icon: FaUsers, label: 'Customers', path: '/admin/customers' },
    { icon: FaChartBar, label: 'Analytics', path: '/admin/analytics' },
    { icon: FaCog, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 ${
        open ? 'w-64' : 'w-20'
      } flex flex-col`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-center h-16">
        <h1 className={`font-bold text-xl ${!open && 'hidden'}`}>PiTaMi Admin</h1>
        {!open && <span className="text-2xl">🧶</span>}
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              {open && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => {
            dispatch(logout());
            window.location.href = '/admin/login';
          }}
          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-gray-800 rounded-lg transition"
        >
          <span>🚪</span>
          {open && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
