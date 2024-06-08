import { useState } from 'react';
import '../App.css';

import { supabase } from '../client';
import { Link } from 'react-router-dom';

function Signup() {

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
  })

  console.log(formData)

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
 * handleSubmit - Função assíncrona para lidar com o envio do formulário de inscrição.
 *
 * @param {Object} e - O objeto de evento do React que é disparado quando o formulário é enviado.
 * @param {Function} e.preventDefault - Método que previne o comportamento padrão do formulário, que é recarregar a página.
 *
 * @returns {void} - Esta função não retorna um valor. Ela tenta criar um novo usuário no Supabase e lida com erros.
 *
 * A função handleSubmit é usada para enviar os dados do formulário para o Supabase para criar um novo usuário. 
 * Ela previne o comportamento padrão do formulário e usa a função signUp da biblioteca Supabase para registrar o usuário.
 * Se a inscrição for bem-sucedida, um alerta é exibido informando ao usuário para verificar seu e-mail para o link de verificação.
 * Se ocorrer um erro, um alerta com a mensagem de erro é exibido.
 */
  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
            }
          }
        })
      //   alert('Check your email for verification link')
      } catch (error) {
          alert(error)
      }    
      
  }
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
          <form onSubmit={handleSubmit} className="space-y-12">
            <div>
            <label htmlFor="" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
               Primeiro Nome
              </label>
              <input
                type="text"
                placeholder='Insira o primeiro nome'
                name='email'
                onChange={handleChange}
                className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <label htmlFor="" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
                Último Nome
              </label>
              <input
                type="text"
                placeholder='Insira o último nome'
                name='email'
                onChange={handleChange}
                className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <label htmlFor="" className='w-full px-1 py-2 text-blue-dark flex flex-col items-start'>
               Email
              </label>
              <input
                type="email"
                placeholder='Insira o seu Email'
                name='email'
                onChange={handleChange}
                className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className='py-4'>
              <label htmlFor="" className='w-full px-1 py-2  text-blue-dark flex flex-col items-start'>
                Palavra-passe
              </label>
              <input
                type="password"
                placeholder='Insira a sua palavra-passe'
                name='password'
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
  // return (
  //   <div className="App">
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" placeholder='Insira o seu nome' name='name' onChange={handleChange} />
  //       <input type="email" placeholder='Insira o seu email' name='email' onChange={handleChange} />
  //       <input type="password" placeholder='Insira a sua palavra-passe' name='password' onChange={handleChange} />
  //       <button type='submit'>
  //         Registrar
  //       </button>
  //     </form>
     

  //   </div>
  // );
}

export default Signup;