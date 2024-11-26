import { motion } from 'framer-motion';
import { FaGithub, FaLink } from "react-icons/fa6";

const projects = [
  {
    title: 'Applications Orange Business',
    description: 'Lead développeur Flutter pour des applications professionnelles chez Orange Business',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=400',
    tech: ['Flutter', 'Dart', 'Azure', 'GitLab'],
    github: 'https://github.com/jeromegsq',
    live: 'https://jeromegsq.com'
  },
  {
    title: 'Applications VR Unity',
    description: 'Développement d\'applications en réalité virtuelle pour divers clients',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800&h=400',
    tech: ['Unity', 'C#', 'VR', 'AR'],
    github: 'https://github.com/jeromegsq',
    live: 'https://jeromegsq.com'
  },
  {
    title: 'Applications Mobile B2B',
    description: 'Développement d\'applications mobiles pour Flunch et Weber Saint-Gobain',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=400',
    tech: ['Flutter', 'Xamarin', 'iOS', 'Android'],
    github: 'https://github.com/jeromegsq',
    live: 'https://jeromegsq.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projets Récents
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Github
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <FaLink className="w-4 h-4" />
                    En savoir plus
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}