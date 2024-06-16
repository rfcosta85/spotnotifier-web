// src/components/SignupForm.js
import React, { useState } from 'react';
import { signUpUser } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUpUser(formData);
      navigate('/');
      alert('Verifique a sua caixa de email e valide a sua conta');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div>
        <label htmlFor="name" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
          Primeiro Nome
        </label>
        <input
          type="text"
          placeholder='Insira o primeiro nome'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="email" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
          Email
        </label>
        <input
          type="email"
          placeholder='Insira o seu Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className='py-4'>
          <label htmlFor="password" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
            Palavra-passe
          </label>
          <input
            type="password"
            placeholder='Insira a sua palavra-passe'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <button
        type='submit'
        className="w-full py-2 rounded-xl bg-primary font-sans text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Registar
      </button>
    </form>
  );
}

export default SignupForm;
