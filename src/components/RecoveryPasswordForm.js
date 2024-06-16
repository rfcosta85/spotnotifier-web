// src/components/RecoveryPasswordForm.js
import React, { useState } from 'react';
import { updatePassword } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

function RecoveryPasswordForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem. Por favor verifique novamente!");
      return;
    }
    try {
      await updatePassword(formData.password);
      navigate('/');
      alert('Senha atualizada com sucesso');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className='py-4'>
        <label htmlFor="password" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
          Nova Palavra-passe
        </label>
        <input
          type="password"
          placeholder='Insira a nova palavra-passe'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className='py-4'>
        <label htmlFor="confirmPassword" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
          Repita nova Palavra-passe
        </label>
        <input
          type="password"
          placeholder='Repita nova Palavra-passe'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-24 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type='submit'
        className="w-full py-2 rounded-xl bg-primary font-sans text-white hover:bg-indigo-700 focus:outline-none 
            focus:ring-2 focus:ring-indigo-500"
      >
        Guardar palavra-passe
      </button>
    </form>
  );
}

export default RecoveryPasswordForm;
