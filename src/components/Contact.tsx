import { motion } from 'framer-motion';
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin, FaBluesky, FaMapLocationDot} from "react-icons/fa6";

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
                  <FaEnvelope className="w-5 h-5 text-gray-600" />
                  <a href="mailto:jerome.ghesquiere@gmail.com" className="hover:text-gray-600">
                    jerome.ghesquiere@gmail.com
                  </a> 
                </div>
                <div className="flex items-center gap-3">
                  <FaMapLocationDot className="w-5 h-5 text-gray-600" />
                  <span>Lille, 59000</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaFilePdf className="w-5 h-5 text-gray-600" />
                  <a href="#" className="hover:text-gray-600">
                    Télécharger mon CV (PDF)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub className="w-5 h-5 text-gray-600" />
                  <a href="https://github.com/jeromegsq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                    github.com/jeromegsq
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin className="w-5 h-5 text-gray-600" />
                  <a href="https://linkedin.com/in/jeromegsq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                    linkedin.com/in/jeromegsq
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaBluesky className="w-5 h-5 text-gray-600" />
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