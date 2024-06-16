import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';

function SpotAdmin() {
  const [spots, setSpots] = useState([]);
//   const navigate = useNavigate();

  useEffect(() => {
    fetchSpots();
  }, []);

  async function fetchSpots() {
    try {
      const { data, error } = await supabase.from('spot').select('*');

      if (error) {
        throw error;
      }

      if (data) {
        setSpots(data);
      }
    } catch (error) {
      console.error('Erro ao buscar vagas:', error.message);
    }
  }

  async function handleDelete(spotUuid) {
    try {
      const { error } = await supabase.from('spot').delete().eq('spotId', spotUuid);
      alert(`Usuário ${spotUuid} deletado!`)

      if (error) {
        throw error;
      }

      // Atualiza a lista de vagas após a exclusão
      fetchSpots();
    } catch (error) {
      console.error('Erro ao excluir vaga:', error.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center h-full">
            <div className="flex gap-6 mt-0">
                <div className="flex justify-center mb-4">
                    <a href="/homepage">
                        <img src="./assets/spotnotifier_logo.png" 
                        alt="Logo Spotnotifier" className="h-52 w-auto" />
                    </a>
                </div>                   
            </div>
        </div>
      <h1 className="text-2xl text-blue-light font-semibold mb-4">Gestão Vagas</h1>

      <Link to="/create-spot" className="bg-blue-500 hover:bg-blue-700 text-blue-light font-bold py-2 px-4 rounded mb-4 inline-block">
        Criar Nova Vaga
      </Link>

      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="border px-6 py-3">Endereço</th>
            <th className="border px-6 py-3">CEP</th>
            <th className="border px-6 py-3">Cidade</th>
            <th className="border px-6 py-3">Vagas</th>
            <th className="border px-6 py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((spot) => (
            <tr key={spot.spotuuid}>
              <td className="border px-6 py-3">{spot.address}</td>
              <td className="border px-6 py-3">{spot.postCode}</td>
              <td className="border px-6 py-3">{spot.city}</td>
              <td className="border px-6 py-3">{spot.slots}</td>
              <td className="border px-6 py-3">
                <button
                  onClick={() => handleDelete(spot.spotId)}
                  className="bg-red-500 hover:bg-red-700 text-blue-light font-bold py-1 px-3 rounded mr-2"
                >
                  Excluir
                </button>
                <Link
                  to={`/edit-spot/${spot.spotId}`}
                  className="bg-blue-500 hover:bg-blue-700 text-primary font-bold py-1 px-3 rounded"
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpotAdmin;
