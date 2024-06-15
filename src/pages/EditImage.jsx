import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function EditImage () {
    return(
        <div className="flex flex-col items-center min-h-screen bg-gray-lightest">
            <div className="w-96 mt-6 h-0">
                <a href='/profile'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="#E25E3E" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </a>
            </div>
            <div className="flex flex-col items-center h-full">
                <div className="flex gap-6 mt-0">                    
                    <div className="flex justify-center mb-4">
                        <img src="./assets/spotnotifier_logo.png" 
                        alt="Logo Spotnotifier" className="h-52 w-auto" />
                    </div>                   
                </div>

                <div className="flex flex-col gap-4 items-center w-80">
                    <img src="./assets/human-icon.png"/>                                
                </div>

                <div className="flex gap-2 items-center mt-14">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E25E3E" 
                    className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                    <p className="text-blue-dark font-sans text-lg">
                        Atualizar imagem
                    </p>
                </div>
            </div>

            <button
              type='submit'              
              className="w-80 h-11 fixed bottom-36 py-2 rounded-xl bg-primary font-sans text-white hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Guardar imagem
            </button>            
        </div>
    );
}

export default EditImage;