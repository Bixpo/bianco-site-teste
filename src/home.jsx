import homeImg from "./img/home.png";
import Services from "./components/Services"; // O caminho para o novo componente
import BlogArticles from "./components/BlogArticles";
import ContactCTA from "./components/ContactCTA";
import MapAndCards from "./components/MapAndCards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-100">
      {/* Header */}
      <header className="absolute top-0 w-full z-20 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
          <h1 className="text-xl font-bold text-sky-700">BIANCO AZURE</h1>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-sky-700">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-sky-700">
              Sobre Nós
            </a>
            <button className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-2 rounded-full shadow-lg">
              Onde nos Encontrar
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[550px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-sm p-4 rounded-full shadow-xl">
          <div className="flex-1 px-4">
            <h2 className="text-lg font-bold text-gray-800">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-sm text-gray-600 mt-1">Lato todo agora.</p>
          </div>
          <p className="hidden md:block text-gray-600 text-sm flex-1 mr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ma.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder=""
              className="bg-gray-200 text-gray-800 p-2 rounded-full w-24 md:w-32"
            />
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
        </div>
      </section>

      {/* Seção de Serviços */}
      <Services />

      {/* Seção de Artigos/Blog */}
      <BlogArticles />

      {/* Seção de Contato/CTA */}
      <ContactCTA />

      <MapAndCards />

      <Footer />

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Bianco Azure. Todos os direitos reservados.
      </footer>
    </div>
  );
}
