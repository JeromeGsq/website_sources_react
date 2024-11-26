import { motion } from 'framer-motion';     
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://dl11.webmfiles.org/big-buck-bunny_trailer.webm"
            type="video/webm"
          /> 
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Lead Développeur Mobile
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Spécialisé en Flutter et Unity avec plus de 8 ans d'expérience.
            Expert en développement d'applications mobiles, réalité virtuelle et augmentée.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="px-4 sm:px-0"
          >
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Voir mes réalisations
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}