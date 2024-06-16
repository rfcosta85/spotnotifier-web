import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditSpot() {
  const { spotUuid: spotUuid } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: '',
    postCode: '',
    city: '',
    slots: ''
  });

  useEffect(() => {
    fetchSpot();
  }, [spotUuid]);

  async function fetchSpot() {
    try {
      const { data, error } = await supabase
        .from('spot')
        .select('*')
        .eq('spotId', spotUuid)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setFormData(data);
      }
    } catch (error) {
      console.error('Erro ao buscar vaga:', error.message);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('spot')
        .update(formData)
        .eq('spotId', spotUuid);

      if (error) {
        throw error;
      }

      navigate('/spot-admin');
    } catch (error) {
      console.error('Erro ao atualizar vaga:', error.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center h-full">
            <div className="flex gap-6 mt-0">
                <div className="flex justify-center mb-4">
                    <a href="/homepage">
                        <img src="/assets/spotnotifier_logo.png" 
                        alt="Logo Spotnotifier" className="h-52 w-auto" />
                    </a>
                </div>                   
            </div>
        </div>
      <h1 className="text-2xl font-semibold text-blue-dark mb-4">Editar Vaga</h1>
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
        <div className="flex flex-col  w-96 min-h-screen bg-gray-lightest gap-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-blue-dark">
              Endereço
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="postCode" className="block text-sm font-medium text-blue-dark">
              CEP
            </label>
            <input
              type="text"
              id="postCode"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-blue-dark">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="slots" className="block text-sm font-medium text-blue-dark">
              Vagas
            </label>
            <input
              type="number"
              id="slots"
              name="slots"
              value={formData.slots}
              onChange={handleChange}
              className="w-full px-6 py-2 border font-sans border-blue-dark rounded-xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
            <button
            type="submit"
            className="w-96 mt-6 py-2 rounded-xl bg-primary font-sans text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 
            focus:ring-indigo-500"
            >
            Salvar
            </button>
        </div>
      </form>
    </div>
  );
}

export default EditSpot;
