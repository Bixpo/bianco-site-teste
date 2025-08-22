import React from 'react';
import imagemHomenDormindo from "../img/homen-dormindo.jpg";
import imagemMulheres from "../img/mulheres.jpg";
import imagemPrancheta from "../img/prancheta.jpg";

const newsArticles = [
  {
    image: imagemMulheres,
    title: 'Título da Notícia Extremamente longo e complexo com detalhes',
    date: '10 de Maio',
    type: 'Tipo de notícia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: imagemPrancheta,
    title: 'Título da Notícia Extremamente longo e complexo com detalhes',
    date: '10 de Maio',
    type: 'Tipo de notícia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: imagemHomenDormindo,
    title: 'Título da Notícia Extremamente longo e complexo com detalhes',
    date: '10 de Maio',
    type: 'Tipo de notícia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const BlogArticles = () => {
  return (
    <section className="grid md:grid-cols-3 gap-6 p-10">
      {newsArticles.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex"
        >
          {/* Container da Imagem */}
          <div className="w-1/3 flex-shrink-0 h-[210px] ">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              style={{ border: '4px solid white' }} 
            />
          </div>

          {/* Conteúdo do Artigo */}
          <div className="p-4 flex flex-col justify-between w-2/3">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-sm">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  {article.date} - {article.type}
                </p>
              </div>

              {/* Botão "Confira" com Ícone */}
               <button className="bg-black text-white px-3 py-1.5 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
              <span className="pl-3">Confira</span>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </button>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              {article.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogArticles;