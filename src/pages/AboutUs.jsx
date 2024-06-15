import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function About () {
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
                                Sobre nós
                            </p>
                            
                        </div>                
                    </div>

                    <div className="flex flex-col items-center mt-12">
                        <img src="./assets/mission.png" alt="our mission" />
                    </div>

                    <div className="flex flex-col gap-4 items-center w-80 mt-6">
                        <div className="flex flex-col gap-2">
                            <p className="text-blue-light font-sans font-bold text-lg">
                                A nossa equipa
                            </p>
                            
                        </div>                
                    </div>

                    <div className="flex gap-10 mt-6 mb-8">
                        <div className="flex flex-col gap-2 items-center">
                            <img src="./assets/human-icon.png"/>
                            <div className="flex flex-col gap-2">
                                <p className="text-blue-light font-sans text-xs">
                                    Francisco Pereira
                                </p>
                                
                            </div>  
                            <div className="flex flex-col gap-2">
                                <p className="text-blue-light font-sans text-xs">
                                    Engenheiro informático
                                </p>
                                
                            </div>    
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="flex flex-col gap-2 items-center">
                                <img src="./assets/human-icon.png"/>
                                <div className="flex flex-col gap-2">
                                    <p className="text-blue-light font-sans text-xs">
                                        Rodrigo Costa
                                    </p>
                                    
                                </div>  
                                <div className="flex flex-col gap-2">
                                    <p className="text-blue-light font-sans text-xs">
                                        Engenheiro de software
                                    </p>
                                    
                                </div>    
                            </div>
                        </div>       
                    </div>

                    <div className="flex gap-12 justify-center mb-16">
                        <p className="text-blue-light font-sans text-sm">
                            Versão 1.0
                        </p>
                        <div className="flex flex-col">
                            <p className="text-blue-light font-sans text-sm">
                                última atualização:
                            </p>
                            <p className="text-blue-light font-sans text-sm">
                                Jun/2024
                            </p>
                        </div>
                                    
                    </div> 
                </div>            

            </div>
        </div>
    );
}

export default About;