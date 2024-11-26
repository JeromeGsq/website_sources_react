import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm'
    >
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 '>
            <a href='/' className='flex items-center gap-2'>
              <img
                src='/assets/jeromegsq_avatar_transparent.png'
                alt='Logo'
                className='h-11'
              />
              <h1 className='text-2xl font-bold text-gray-800'>
                Jérôme Ghesquière
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6 flex-1 justify-center'>
            <a href='#about' className='hover:text-gray-600 transition-colors'>
              À propos
            </a>
            <a
              href='#projects'
              className='hover:text-gray-600 transition-colors'
            >
              Projets
            </a>
            <a
              href='#contact'
              className='hover:text-gray-600 transition-colors'
            >
              Contact
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className='hidden md:flex gap-4'>
            <a
              href='https://github.com/jeromegsq'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='w-5 h-5 hover:text-gray-600 transition-colors' />
            </a>
            <a
              href='https://linkedin.com/in/jeromegsq'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='w-5 h-5 hover:text-gray-600 transition-colors' />
            </a>
            <a href='mailto:contact@jeromegsq.com'>
              <FaEnvelope className='w-5 h-5 hover:text-gray-600 transition-colors' />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          > 
            <div className='space-y-1.5'>
              <span
                className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-900 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='md:hidden py-4'
          >
            <div className='flex flex-col gap-4'>
              <a
                href='#about'
                className='hover:text-gray-600 transition-colors'
              >
                À propos
              </a>
              <a
                href='#projects'
                className='hover:text-gray-600 transition-colors'
              >
                Projets
              </a>
              <a
                href='#contact'
                className='hover:text-gray-600 transition-colors'
              >
                Contact
              </a>
            </div>
            <div className='flex gap-4 mt-4'>
              <a
                href='https://github.com/jeromegsq'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='w-5 h-5 hover:text-gray-600 transition-colors' />
              </a>
              <a
                href='https://linkedin.com/in/jeromegsq'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className='w-5 h-5 hover:text-gray-600 transition-colors' />
              </a>
              <a href='mailto:contact@jeromegsq.com'>
                <FaEnvelope className='w-5 h-5 hover:text-gray-600 transition-colors' />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
