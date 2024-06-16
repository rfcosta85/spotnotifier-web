// src/pages/Homepage.js
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MainMenuModal from "../components/modals/MainMenuModal";
import DirectionForm from "../components/forms/DirectionForm";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { logout } from "../services/AuthService";
import { containerStyle, center } from "../utils/mapConfig";
import { RxHamburgerMenu } from "react-icons/rx";

const Homepage = ({ token }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    destiny: '',
    arrival: ''
  });

  let navigate = useNavigate();

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  function handleLogout() {
    logout();
    navigate('/');
  }

  function handleMenuClick() {
    setIsModalOpen(true);
  }

  function handleSidebarToggle() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleClickOutside(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="relative w-full h-full">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} options={{ label: { text: 'posição teste' } }} />
        </GoogleMap>
      </LoadScript>

      <div className="absolute top-2 left-2 z-50 p-6 bg-white bg-opacity-75 m-2 rounded-md">
        <div className="flex flex-row items-center gap-6 mb-2">
          <RxHamburgerMenu className="hover:cursor-pointer" onClick={handleSidebarToggle} />
          <h2 className="text-xl font-normal font-sans text-blue-light">Indicações</h2>
        </div>
        <DirectionForm handleChange={handleChange} />
      </div>

      <Header token={token} handleLogout={handleLogout} handleMenuClick={handleMenuClick} />

      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6" ref={modalRef}>
            <button onClick={handleCloseModal} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">&times;</button>
            <MainMenuModal />
          </div>
        </div>
      )}

      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
    </div>
  );
}

export default Homepage;
