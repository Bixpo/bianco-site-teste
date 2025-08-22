import React from "react";
import mapBackground from "../img/map-background.png";
import HelpCard from "./HelpCard";

const cities = [
  { name: "Nome da Cidade", hours: "N/A - 00:00 - 00:00" },
  { name: "Nome da Cidade", hours: "N/A - 00:00 - 00:00" },
  { name: "Nome da Cidade", hours: "N/A - 00:00 - 00:00" },
  { name: "Nome da Cidade", hours: "N/A - 00:00 - 00:00" },
  { name: "Nome da Cidade", hours: "N/A - 00:00 - 00:00" },
];

const MapSection = () => {
  return (
    <div
      className="relative w-full min-h-[700px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${mapBackground})` }}
    >
      {/* Overlay SEM blur para o mapa */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Conteúdo sobre o mapa */}
      <div className="relative z-10 p-6 flex flex-col items-center">
        {/* Substitua a div pelo componente HelpCard */}

        <HelpCard />

        {/* Cards de Cidades */}
        <div className="max-w-5xl w-full overflow-x-auto">
          <div className="flex space-x-4 py-4 px-2">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md border border-gray-100 p-4"
              >
                <div className="flex items-center justify-center h-24 bg-gray-200 rounded-lg mb-4">
                  {/* Ícone de placeholder */}
                  <svg
                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l1.5 1.5 2.25-2.25m3.75-8.25L12 9l6-3m3 2.25l-2.25 2.25m0 0l-3.6-3.6m3.6 3.6l-1.5 1.5-3.75-3.75M18 19.5l-2.25-2.25m0 0L12 21.75l-6-3m6-2.25l-2.25 2.25M10.5 6h.008v.008h-.008V6zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800">{city.name}</h4>
                  <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                    Editar
                  </button>
                </div>
                <p className="text-sm text-gray-500">{city.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
