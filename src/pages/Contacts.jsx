import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Contacts () {
    return(
        <div className="flex flex-col items-center min-h-screen bg-gray-lightest">
            <div className='w-full max-w-md p- ssl:p-6 bg-white shadow-md rounded-lg'>
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
                    <div className="flex flex-col gap-2">
                        <p className="text-blue-light font-sans font-bold text-lg">
                            Contactos equipa técnica
                        </p>
                        
                    </div>                
                </div>

                <div className="flex flex-col items-center mt-12">
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 24 24" strokeWidth={1.5} 
                            stroke="#E25E3E" className="size-6">
                            <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                        </svg>

                        <a href='/edit-address' className="text-blue-dark w-52">
                            contatco@spotnotifier.com
                        </a>             

                    </div>

                    <div className="flex gap-2 mt-12">
                        <img src="./assets/facebook_icon.svg" alt="Facebook icon" />

                        <a href='/recovery-password' className="text-blue-dark w-52">
                            /spotnotifier
                        </a>
                    </div>
                </div>

                <div className="flex gap-2 mt-12">
                        <img src="./assets/x_icon.svg" alt="X icon" />

                        <a href='/edit-phone' className="text-blue-dark w-52">
                            /spotnotifier
                        </a>
                </div>

                <div className="flex gap-2 mt-12 mb-16">
                    <img src="./assets/instagram_icon.svg" alt="Instagram icon" />
                    <a href='/edit-email' className="text-blue-dark w-52">
                        @spotnotifier
                    </a>
                </div>

                </div>       
            </div>
                 
        </div>
    );
}

export default Contacts;