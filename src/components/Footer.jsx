import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e Informações */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold text-lg mb-4 text-gray-800">BIANCO AZURE</h4>
          <p className="text-sm">
            BIANCO AZURE 2025 - todos os direitos reservados
          </p>
        </div>

        {/* Páginas */}
        <div>
          <h5 className="font-bold text-lg mb-4 text-gray-800">Páginas</h5>
          <ul className="space-y-2 text-sm">
            <li>Home Principal</li>
            <li>Sobre Nós</li>
            <li>Serviços</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h5 className="font-bold text-lg mb-4 text-gray-800">Serviços</h5>
          <ul className="space-y-2 text-sm">
            <li>Aparelhos Auditivos</li>
            <li>Equipamentos Respiratórios</li>
            <li>Home Care</li>
          </ul>
          <p className="mt-4 text-xs">CNPJ: 17.718.423/0001-03</p>
        </div>

        {/* Contato */}
        <div>
          <h5 className="font-bold text-lg mb-4 text-gray-800">Contato</h5>
          <ul className="space-y-2 text-sm">
            <li>(00)0000-0000</li>
            <li>(00)0000-0000</li>
            <li>(00)0000-0000</li>
            <li>email@email.com</li>
          </ul>
        </div>
      </div>

      {/* Ícones de redes sociais */}
      <div className="container mx-auto mt-8 flex justify-end space-x-4">
        {/* Adicione os ícones de redes sociais aqui */}
      </div>
    </footer>
  );
};

export default Footer;
