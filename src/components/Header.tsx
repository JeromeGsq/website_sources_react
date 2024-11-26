import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img src="https://jeromegsq.com/assets/logo.png" alt="Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-gray-800">
              Jérôme Ghesquière
            </h1>
          </motion.div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-600 transition-colors">À propos</a>
            <a href="#projects" className="hover:text-gray-600 transition-colors">Projets</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/jeromegsq" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/jeromegsq" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </a>
            <a href="mailto:contact@jeromegsq.com">
              <FaEnvelope className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}