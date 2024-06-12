import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { RxHamburgerMenu } from "react-icons/rx";
import { ImLocation } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { useState } from 'react';



const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {    
    lat: 41.53343623436007,
    lng: -8.622353218100562
  };  
  
const Homepage = ({token}) => {
    const [formData, setFormData] = useState({
        destiny: '',
        arrival: ''
    })
    let navigate = useNavigate();
    function handleChange(event) {
        setFormData((prevFormData) => {
          return {
            ...prevFormData,
            [event.target.name]: event.target.value
          }
        })    
      }

    /**
 * handleLogout - Função para lidar com o logout do usuário.
 *
 * @returns {void} - Esta função não retorna um valor. Ela remove o token de autenticação do sessionStorage e redireciona o usuário para a página inicial.
 *
 * A função handleLogout é usada para desconectar o usuário da aplicação. 
 * Ela remove o token de autenticação armazenado no sessionStorage, que é utilizado para manter a sessão do usuário.
 * Após a remoção do token, a função redireciona o usuário para a página inicial da aplicação.
 */
    function handleLogout() {
        sessionStorage.removeItem('token')
        navigate('/')
    }
    // return (
    //     <div>
    //         <h3>Bem vindo de volta, {token.user.user_metadata.name}</h3>
    //         <button onClick={handleLogout}>Logout</button>
    //     </div>
    // )

    return (
        <div className="relative w-full h-full">
          <LoadScript
            googleMapsApiKey="AIzaSyDwbdfKlaQHhOoBHx_ClXE77Wq6bVu-MqY"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} options={{
                label: {
                    text: 'posição teste'
                }
              }} />
            </GoogleMap>
          </LoadScript>
            <div className="absolute top-0 left-0 z-50 p-6 bg-white bg-opacity-75 m-2 rounded-md">
                {/* <h3>Bem vindo de volta, {token.user.user_metadata.name}</h3>
                <button onClick={handleLogout} className="mt-2 p-2 bg-blue-500 text-black rounded">Logout</button> */}
                <div className="flex flex-row items-center gap-6 mb-2">
                    <RxHamburgerMenu />
                    <h2 className="text-xl font-normal font-sans text-blue-light">Indicações</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-4">
                        <ImLocation size={20} color="blue"/>
                        <input
                        type="text"
                        placeholder='Escolher ponto de partida'
                        name='destiny'
                        onChange={handleChange}
                        className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <ImLocation2 size={20} color="orange"/>
                        <input
                        type="text"
                        placeholder='Escolher o destino'
                        name='arrival'
                        onChange={handleChange}
                        className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-1 z-50 p-6 bg-white bg-opacity-75 m-2 rounded-md">
                <div className="flex flex-row items-center gap-6 mb-2">
                    <RxHamburgerMenu />
                    <h3>{token.user.user_metadata.name}</h3>
                    <button onClick={handleLogout} className="text-blue-dark">Logout</button>                
                </div>
            </div>
        </div>
      )
}

export default Homepage