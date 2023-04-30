import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaRegIdCard, FaCar, FaUsers } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="bg-gray-200 w-1/6 min-h-screen">
      <nav className="mt-6">
        <ul>
          <li className="mb-4">
            <Link to="/" className="flex items-center text-gray-600 py-2 pl-4 nav-item">
              <FaHome className="mr-2" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/employee-management" className="flex items-center text-gray-600 py-2 pl-4 nav-item">
              <FaRegIdCard className="mr-2" />
              <span>Employee Management</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/trip-management" className="flex items-center text-gray-600 py-2 pl-4 nav-item">
              <FaCar className="mr-2" />
              <span>Trip Management</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/driver-management" className="flex items-center text-gray-600 py-2 pl-4 nav-item">
              <FaUsers className="mr-2" />
              <span>Driver Management</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
