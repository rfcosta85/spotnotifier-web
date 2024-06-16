// src/pages/Signup.js
import React from 'react';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p- ssl:p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center mb-4">
          <img src="./assets/spotnotifier_logo.png" alt="Logo Spotnotifier" className="h-52 w-auto" />
        </div>
        <div className="text-center mb-16">
          <h1 className="text-xl font-normal font-sans text-blue-light">Bem-vindo ao Spotnotifier</h1>
        </div>
  
        <div className="mb-4">
          <SignupForm />
        </div>
  
        <div className="text-center mt-20">
          <a href="/recovery-password" className="text-sm font-sans text-blue-light hover:underline">Esqueceu a sua palavra-passe</a>
        </div>
  
        <div className="text-center mt-4 mb-16">
          <p className="text-sm text-orange">
            Já possui uma conta? <Link to='/' className="text-orange font-sans hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
