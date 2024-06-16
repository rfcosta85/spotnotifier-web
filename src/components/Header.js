// src/components/Header.js
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

function Header({ token, handleLogout, handleMenuClick }) {
  return (
    <div className="absolute top-2 right-2 z-50 p-6 bg-white bg-opacity-75 m-2 rounded-md">
      <div className="flex flex-row items-center gap-6 mb-2">
        <RxHamburgerMenu className="hover:cursor-pointer" onClick={handleMenuClick} />
        <h3>{token.user.user_metadata.name}</h3>
        <button onClick={handleLogout} className="text-blue-dark">Logout</button>
      </div>
    </div>
  );
}

export default Header;
