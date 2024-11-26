import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaBluesky,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-5 h-5 text-gray-600" />
                    <a
                      href="mailto:jerome.ghesquiere@gmail.com"
                      className="hover:text-gray-600"
                    >
                      jerome.ghesquiere@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaFilePdf className="w-5 h-5 text-gray-600" />
                    <a
                      href="/assets/jerome_ghesquiere.pdf"
                      download="jerome_ghesquiere.pdf"
                      className="hover:text-gray-600"
                    >
                      Mon CV (PDF)
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <FaGithub className="w-5 h-5 text-gray-600" />
                    <a
                      href="https://github.com/jeromegsq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600"
                    >
                      github.com/jeromegsq
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="w-5 h-5 text-gray-600" />
                    <a
                      href="https://linkedin.com/in/jeromegsq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600"
                    >
                      linkedin.com/in/jeromegsq
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBluesky className="w-5 h-5 text-gray-600" />
                    <a
                      href="https://bsky.app/profile/jeromegsq.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600"
                    >
                      @jeromegsq.bsky.social
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
