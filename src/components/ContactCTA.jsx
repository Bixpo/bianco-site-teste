import React, { useRef, useState } from "react";
import sliderImg1 from "../img/slider1.jpg";
import sliderImg2 from "../img/slider2.jpg";
import sliderImg3 from "../img/slider3.jpg";

const slides = [
  {
    image: sliderImg1,
    title: "Entre em contato com nossa equipe de profissionais",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    buttonText: "Tire suas dúvidas",
  },
  {
    image: sliderImg2,
    title: "Seja nosso parceiro",
    description:
      "Nossa equipe está sempre em busca de novas parcerias para expandir nossa rede e oferecer os melhores serviços. Fale com a gente para mais informações.",
    buttonText: "Saiba mais",
  },
  {
    image: sliderImg3,
    title: "Nossa equipe de especialistas está pronta para te ajudar",
    description:
      "Temos profissionais qualificados para atender às suas necessidades e tirar todas as suas dúvidas. Agende uma consulta hoje mesmo!",
    buttonText: "Entre em contato",
  },
];

const ContactCTA = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mx-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden snap-x snap-mandatory rounded-lg"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-start"
            style={{ height: "400px" }}
          >
            <section
              className="relative flex items-center h-full overflow-hidden"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Camada com efeito de blur suave e alta transparência */}
              <div className="absolute inset-y-0 left-0 w-3/4 md:w-2/5 bg-white/10 backdrop-blur-sm"></div>

              {/* Conteúdo do Slide */}
              <div className="relative z-10 p-10 md:p-16 w-full md:w-2/5 text-gray-800">
                <h3 className="text-xl font-bold mb-4">{slide.title}</h3>
                <p className="mb-6 text-sm">{slide.description}</p>
                <button className="bg-black text-white px-3 py-1.5 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
                  <span className="pl-3">Tire suas dúvidas</span>
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
            </section>
          </div>
        ))}
      </div>

      {/* Indicadores de Slide e Barra de Progresso */}
      <div className="flex flex-col items-center mt-6">
        {/* Barra de progresso */}
        <div className="w-4/5 md:w-1/2 h-1 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Indicadores de bolinha */}
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full border border-gray-300 transition-colors duration-300 focus:outline-none ${
                currentSlide === index ? "bg-blue-500" : "bg-transparent"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
