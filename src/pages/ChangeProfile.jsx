import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function ChangeProfile () {
    return(
        <div className="flex flex-col items-center min-h-screen bg-gray-lightest">
            <div className="w-96 mt-6 h-3">
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
                <div className="flex flex-col gap-2">
                    <p className="text-blue-light font-sans text-lg">
                        Nome utilizador
                    </p>
                    
                </div>                
            </div>

            <div className="flex flex-col items-center mt-12">
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E25E3E" 
                    className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <a href='/recovery-password' className="text-blue-dark w-52">
                        Alterar palavra-passe
                    </a>

                </div>

                <div className="border-b border-[#0C5475] w-96 mt-6"></div>

                <div className="flex gap-2 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E25E3E" 
                        className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    <a href='/edit-image' className="text-blue-dark w-52">
                        Alterar imagem
                    </a>
                </div>

                <div className="border-b border-[#0C5475] w-96 mt-6"></div>

                <div className="flex gap-2 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="#E25E3E" className="size-6">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                    </svg>

                    <a href='/' className="text-blue-dark w-52">
                        Alterar morada
                    </a>
                </div>
            </div>

            <div className="border-b border-[#0C5475] w-96 mt-6"></div>
            
            <div className="flex gap-2 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="#E25E3E" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>

                    <a href='/' className="text-blue-dark w-52">
                        Alterar contacto
                    </a>
             </div>

             <div className="border-b border-[#0C5475] w-96 mt-6"></div>

            <div className="flex gap-2 mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                    viewBox="0 0 24 24" strokeWidth={1.5} 
                    stroke="#E25E3E" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <a href='/' className="text-blue-dark w-52">
                    Alterar email
                </a>
            </div>

            </div>            
        </div>
    );
}

export default ChangeProfile;