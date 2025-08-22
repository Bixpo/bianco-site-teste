import React from 'react';
import imagemAparelhos from "../img/imagem-aparelhos.jpg";
import imagemRespiratorios from "../img/imagem-respiratorios.jpg";
import imagemHomeCare from "../img/imagem-home-care.jpg";

const services = [
  {
    title: "Aparelhos Auditivos",
    linkText: "clique aqui e confira >",
    description: "Não deixe que a perda auditiva limite a sua vida.",
    imageUrl: imagemAparelhos,
    gradient: 'linear-gradient(to top, #6b21a8, #8b5cf6)', // Degradê roxo
  },
  {
    title: "Equipamentos Respiratórios",
    linkText: "clique aqui e confira >",
    description: "Durma, vivendo utilizando nossos equipamentos originais e de última geração.",
    imageUrl: imagemRespiratorios,
    gradient: 'linear-gradient(to top, #16a34a, #4ade80)', // Degradê verde
  },
  {
    title: "Home Care",
    linkText: "clique aqui e confira >",
    description: "Cuide da sua saúde sem precisar sair de casa.",
    imageUrl: imagemHomeCare,
    gradient: 'linear-gradient(to top, #0c4a6e, #38bdf8)', // Degradê azul
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 p-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden flex flex-col shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          {/* Camada de Fundo com a Imagem */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
          />

          {/* Camada de Degradê sobre a Imagem */}
          <div
            className="absolute inset-0 opacity-70 z-10"
            style={{ background: service.gradient }}
          />

          {/* Conteúdo do Card */}
          <div className="p-6 flex flex-col flex-grow relative z-20 text-white">
            <h3 className="text-xl font-bold">
              {service.title}
            </h3>
            <a href="#" className="text-sm mt-2 hover:underline">
              {service.linkText}
            </a>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="text-sm px-4 py-1.5 rounded-full border border-white hover:bg-white hover:text-gray-800 transition-colors">
                Ribeirão Preto
              </button>
              <button className="text-sm px-4 py-1.5 rounded-full border border-white hover:bg-white hover:text-gray-800 transition-colors">
                Campinas
              </button>
              <button className="text-sm px-4 py-1.5 rounded-full border border-white hover:bg-white hover:text-gray-800 transition-colors">
                São José do Rio Preto
              </button>
            </div>

            <p className="text-sm mt-4 pt-4 border-t border-gray-400 flex-grow">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;