// src/components/Sidebar.js
import React from 'react';

function Sidebar({ isSidebarOpen, handleSidebarToggle }) {
  return (
    <>
      <div className={`fixed inset-y-0 left-0 w-72 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`} onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Spotnotifier</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="/profile">Perfil</a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="/create-spot">Registo de vaga</a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="/create-colaborator">Registo de utilizador</a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="/spot-admin">Gestão de vaga</a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="/colaboratos-admin">Gestão de utilizador</a>
            </li>
          </ul>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={handleSidebarToggle}></div>
      )}
    </>
  );
}

export default Sidebar;
