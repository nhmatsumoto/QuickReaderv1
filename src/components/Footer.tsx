import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center md:justify-start mb-6 md:mb-0 space-x-4">
          <a href="#about" className="hover:text-white text-sm">
            Sobre
          </a>
          <a href="#projects" className="hover:text-white text-sm">
            Projetos
          </a>
          <a href="#contact" className="hover:text-white text-sm">
            Contato
          </a>
        </div>
        <div className="flex space-x-4 justify-center md:justify-end">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} - NHMatsumoto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};