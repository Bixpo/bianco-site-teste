import React from 'react';

const HelpCard = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Precisa de Ajuda?</h3>
          <p className="text-gray-500 text-sm">Formulário · Contato</p>
          <p className="text-gray-500 text-sm">08:00 - 18:00</p>
        </div>
        <div className="md:mx-8 mb-6 md:mb-0 text-center md:text-left text-gray-700 text-sm max-w-xl">
          <p>
            Não consegue encontrar exatamente o que procura?
            <br />
            entre em contato com os nossos atendentes treinados para te guiar na sua escolha
            para o melhor do seu tratamento.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <button className="w-full bg-black text-white font-bold rounded-full px-8 py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            Entrar em contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;