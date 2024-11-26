import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
 
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0'>
        <video
          ref={videoRef} 
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src='./assets/background2.mp4' type='video/mp4' />
        </video> 
        {/* Overlay */}
        <motion.div 
          className='absolute inset-0'
          initial={{ backgroundColor: 'rgba(60, 128, 128, 1)' }}
          animate={{ backgroundColor: 'rgba(60, 128, 128, 0.7)' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.7,
            ease: "easeOut"
          }}
          className='max-w-3xl mx-auto text-center text-white'
        >
          <motion.h1
            className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-left'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut",
              delay: 0.2 
            }}
          >
            Lead Développeur Mobile
          </motion.h1>
          <motion.p
            className='text-lg sm:text-xl mb-6 sm:mb-8 sm:px-0 text-left'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut",
              delay: 0.4 
            }}
          >
            Expert en développement d'applications mobiles, 
            réalité virtuelle et augmentée avec plus de 8 ans d'expérience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5 
            }}
          >
            <a
              href='#projects'
              className='inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base'
            >
              Voir les projets
              <FaArrowRight className='w-3 h-3 sm:w-4 sm:h-4' />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
