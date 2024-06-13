import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Profile () {
    return(
        <div className="flex flex-col items-center min-h-screen bg-gray-100 mt-8">
            <div className="flex gap-2">
                <div className="flex justify-center mb-4">
                    <img src="./assets/spotnotifier_logo.png" alt="Logo Spotnotifier" className="h-52 w-auto" />
                </div>

                <div className="mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E25E3E" className="size-6">
                    <path fillRule="evenodd" 
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" 
                    clipRule="evenodd" />
                </svg>
                </div>
            </div>

        </div>
    );
}

export default Profile;