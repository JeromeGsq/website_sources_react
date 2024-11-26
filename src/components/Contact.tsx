import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Me Contacter</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <a href="mailto:jerome.ghesquiere@gmail.com" className="hover:text-gray-600">
                    jerome.ghesquiere@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span>Lille, 59000</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <a href="#" className="hover:text-gray-600">
                    Télécharger mon CV (PDF)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-gray-600" />
                  <a href="https://github.com/jeromegsq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                    github.com/jeromegsq
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                  <a href="https://linkedin.com/in/jeromegsq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                    linkedin.com/in/jeromegsq
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  </svg>
                  <a href="https://bsky.app/profile/jeromegsq.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                    @jeromegsq.bsky.social
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}