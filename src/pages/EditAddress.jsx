import { useState } from 'react';
import '../App.css';

import { supabase } from '../client';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function EditAddress({setToken}) {
    let navigate = useNavigate()
  const [formData, setFormData] = useState({
      email: '',
  })


  /**
 * handleChange - Função para atualizar o estado do formulário com base nas alterações nos campos de entrada.
 *
 * @param {Object} event - O objeto de evento do React que é disparado quando há uma alteração em um campo de entrada.
 * @param {Object} event.target - O elemento de entrada HTML que disparou o evento.
 * @param {string} event.target.name - O nome do campo de entrada. Este nome deve corresponder a uma chave no estado do formulário.
 * @param {string} event.target.value - O novo valor do campo de entrada.
 *
 * @returns {void} - Esta função não retorna um valor. Ela chama a função setFormData para atualizar o estado do formulário.
 *
 * A função handleChange é usada para atualizar dinamicamente o estado do formulário conforme o usuário digita nos campos de entrada.
 * Utiliza-se a função setFormData para atualizar o estado do formulário, que preserva os valores anteriores e atualiza apenas
 * o campo correspondente que sofreu alteração. A função espera que os campos de entrada tenham um atributo 'name' que corresponda
 * a uma chave no objeto de estado.
 */
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })    
  }

 /**
 * handleSubmit - Função assíncrona para lidar com o envio do formulário de login.
 *
 * @param {Object} e - O objeto de evento do React que é disparado quando o formulário é enviado.
 * @param {Function} e.preventDefault - Método que previne o comportamento padrão do formulário, que é recarregar a página.
 *
 * @returns {void} - Esta função não retorna um valor. Ela tenta fazer login do usuário no Supabase e lida com erros.
 *
 * A função handleSubmit é usada para enviar os dados do formulário para o Supabase para autenticar um usuário. 
 * Ela previne o comportamento padrão do formulário e usa a função signInWithPassword da biblioteca Supabase para autenticar o usuário.
 * Se a autenticação for bem-sucedida, o token de autenticação é salvo e o usuário é redirecionado para a página inicial.
 * Se ocorrer um erro, um alerta com a mensagem de erro é exibido.
 */
  async function handleSubmit(e) {
    e.preventDefault()
    try {
        const { data, error } = await supabase.auth.updateUser({
          email: formData.email,
        })
        if (error) throw error
        setToken(data)
        navigate('/homepage')
      } catch (error) {
          alert(error)
      }    
  }

  async function handleRecoveryPassword(e) {
    const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
      redirectTo: 'http://localhost:3000/recovery-password', // URL correta
    });
    
    if (error) {
      alert(error.message);
    } else {
      alert('Verifique seu email para o link de recuperação de senha.');
    }
    
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <div className="w-96 mt-6 h-6">
                <a href='/profile'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="#E25E3E" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </a>
            </div>
      <div className="w-full max-w-md p- ssl:p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center mb-4">
          <img src="./assets/spotnotifier_logo.png" alt="Logo Spotnotifier" className="h-52 w-auto" />
        </div>
        <div className="mb-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className=''>
              <label htmlFor="" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
               Morada
              </label>
              <input
                type="email"
                placeholder='Insira a sua morada'
                name='email'
                onChange={handleChange}
                className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className=''>
              <label htmlFor="" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
               Código Postal
              </label>
              <input
                type="text"
                placeholder='Insira o seu código postal'
                name='postCode'
                onChange={handleChange}
                className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className=''>
              <label htmlFor="" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
               Cidade
              </label>
              <input
                type="text"
                placeholder='Insira a sua cidade'
                name='city'
                onChange={handleChange}
                className="w-full mb-32 px-3 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type='submit'
              className="w-full py-2 rounded-xl bg-primary font-sans text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 
                focus:ring-indigo-500"
            >
              Guardar morada
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default EditAddress;