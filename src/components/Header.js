import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">Employee Trip Manager</Link>
      <div className="flex items-center">
        <img src="user-profile-image.jpg" alt="User Profile" className="w-8 h-8 rounded-full mr-2" />
        <span>John Doe</span>
      </div>
    </div>
  );
}

export default Header;
