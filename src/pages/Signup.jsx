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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Insira o seu nome' name='name' onChange={handleChange} />
        <input type="email" placeholder='Insira o seu email' name='email' onChange={handleChange} />
        <input type="password" placeholder='Insira a sua palavra-passe' name='password' onChange={handleChange} />
        <button type='submit'>
          Registrar
        </button>
      </form>
      Já possui uma conta? <Link to='/'>Login</Link>

    </div>
  );
}

export default Signup;