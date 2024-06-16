// src/components/forms/DirectionForm.js
import React from 'react';
import { ImLocation, ImLocation2 } from "react-icons/im";

function DirectionForm({ handleChange }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <ImLocation size={20} color="blue" />
        <input
          type="text"
          placeholder="Escolher ponto de partida"
          name="destiny"
          onChange={handleChange}
          className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <ImLocation2 size={20} color="orange" />
        <input
          type="text"
          placeholder="Escolher o destino"
          name="arrival"
          onChange={handleChange}
          className="w-full px-3 py-2 border font-sans border-blue-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
}

export default DirectionForm;
