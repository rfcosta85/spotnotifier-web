import React from 'react';
import { RxArrowLeft } from "react-icons/rx";
import RecoveryPasswordForm from '../components/RecoveryPasswordForm';

function RecoveryPassword() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p- ssl:p-6 bg-white shadow-md rounded-lg">
        <div className='flex flex-col items-start text-primary'>
          <a href="/">
            <RxArrowLeft size={24} />
          </a>
        </div>
        <div className="flex justify-center mb-4">
          <img src="./assets/logo_spot.png" alt="Logo Spotnotifier" className="h-52 w-auto" />
        </div>
        <div className="text-center mb-16">
          <h1 className="text-xl font-normal font-sans text-blue-light">Bem-vindo ao Spotnotifier</h1>
        </div>
        <div className="mb-24">
          <RecoveryPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default RecoveryPassword;
