import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function ColaboratorsAdmin() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    last_name: '',
    role: '',
    hash_password: '',
    name: ''
  });

  useEffect(() => {
    fetchUser();
  }, [userId]);

  /**
 * Fetches user data from Supabase API based on userId and updates the form data state.
 * @async
 * @function fetchUser
 * @throws {Error} Throws an error if there's an issue fetching user data.
 */
  async function fetchUser() {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setFormData(data);
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error.message);
    }
  }

  /**
 * Updates the form data state based on input change events.
 * @function handleChange
 * @param {Object} event - The event object containing the input's name and value.
 */
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  /**
 * Handles form submission by updating user data in the database.
 * @async
 * @function handleSubmit
 * @param {Object} e - The form submit event object.
 * @throws {Error} Throws an error if there's an issue updating user data.
 */
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('users')
        .update(formData)
        .eq('id', userId);

      if (error) {
        throw error;
      }

      navigate('/colaborators-admin');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">        
      <div className="flex flex-col items-center h-full">
      <div className="w-96 mt-6 h-6">
          <a href='/homepage'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                  stroke="#E25E3E" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
          </a>
        </div>
        <div className="flex gap-6 mt-0">
          <div className="flex justify-center mb-4">
            <a href="/homepage">
              <img src="/assets/spotnotifier_logo.png" alt="Logo Spotnotifier" className="h-52 w-auto" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-blue-dark mb-4">Editar Usuário</h1>
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
        <div className="flex flex-col w-96 min-h-screen bg-gray-lightest gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-dark w-14">
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder='Insira seu nome'
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-blue-dark w-16">
              Apelido
            </label>
            <input
              type="text"
              placeholder='Insira o seu apelido'
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-dark w-14">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Insira o seu email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-blue-dark w-12">
              Role
            </label>
            <input
              type="number"
              placeholder='Insira a função'
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="hash_password" className="block text-sm font-medium text-blue-dark w-28">
                Palavra-passe
            </label>
            <input
              type="password"
              id="hash_password"
              placeholder='Insira a palavra passe'
              name="hash_password"
              value={formData.hash_password}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-96 mt-6 py-2 rounded-xl bg-primary font-sans text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ColaboratorsAdmin;
