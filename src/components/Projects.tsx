import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";

const projects = [
  {
    title: "Compagnon by Smag - Mobile",
    client: "SMAG - smart agriculture",
    description:
      "Visualisez en temps réel la situation parasitaire observée par les autres utilisateurs proches de votre exploitation. Vous obtenez une information précise et locale.",
    image:
      "https://smag.tech/wp-content/uploads/2023/07/MicrosoftTeams-image-143.jpg",
    tech: ["Flutter", "iOS", "Android", "Freelance"],
    live: "https://smag.tech/application-companion-by-smag/",
    align: "object-[0px,0px]",
  },
  {
    title: "Your Monaco - Mobile",
    client: "Monaco",
    description:
      "Your Monaco est l'application de services et d'informations sur la qualité de vie à Monaco.",
    image:
      "https://play-lh.googleusercontent.com/kIMdw1zJYD8-COdmOZH5Xyo3YGq_wgaHOycjV_Ly0E-OWxFIJSeO3jGshanhevIspCQ=w5120-h2880-rw",
    tech: ["Flutter", "iOS", "Android", "Azure"],
    live: "https://yourmonaco.mc/",
    align: "object-[0px,-85px]",
  },
  {
    title: "My Resume - Mobile",
    client: "Orange",
    description:
      "My Resume est une application mobile et web qui permet de réaliser les documents nécessaires à une candidature mais aussi un accompagnement à l'entretien d'embauche.",
    image: "https://orange.jobs/images/process/m4.png",
    tech: ["Flutter", "iOS", "Android", "Azure"],
    live: "https://myresume.orange.com/",
    align: "object-[0px,-30px]",
  },
  {
    title: "Mon coup de pouce - Mobile",
    client: "Floa Bank",
    description:
      "Demandez un mini prêt, étalez vos achats en 4x ou visualisez vos échéanciers en 1 clin d'œil, c'est simple grâce à l'Appli FLOA ! Grâce à ce mini crédit, vous financez vos envies du moment ou les imprévus.",
    image: "https://www.moncoupdepouce.com/assets/img/lp_direct/connect.svg",
    tech: ["Flutter", "iOS", "Android", "Azure"],
    live: "https://www.floabank.fr/credits/mon-coup-de-pouce",
    align: "object-[0px,0px]",
  },
  {
    title: "MyFlunch - Mobile",
    client: "Flunch",
    description:
      "MyFlunch est une application mobile qui permet de gérer sa carte de fidélité et profiter des avantages de la carte.",
    image:
      "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/823cd6b1-7903-4dc0-8d1b-78e7e8f55bca/761742941/flunch-screenshot.png",
    tech: ["Xamarin", "iOS", "Android"],
    live: "https://www.flunch.fr/",
    align: "object-[0px,-50px]",
  },
  {
    title: "Wankul Creator - Mobile",
    client: "Wankil Studio",
    description:
      "Wankul Creator va te permettre de créer facilement ton propre wankul avec des centaines de personnalisations différentes !",
    image:
      "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/be604a98-1746-4c35-8b37-c9861c1252dd/3317590710/wankul-creator-screenshot.png",
    tech: ["Unity", "iOS", "Android", "Youtube"],
    live: "https://www.wankil.fr/",
    align: "object-[0px,-0px]",
  },
  {
    title: "Harald - Mobile et Desktop",
    client: "Asmodee",
    description:
      "Harald est un jeu de cartes d'influence et de pouvoir. En tant que chef de son village, chaque joueur enverra les personnages les plus influents du royaume pour séduire le roi et obtenir ses faveurs. Mais pour l'emporter, vous devrez faire preuve de sagesse et bien utiliser les capacités de chaque personnage.",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/648340/ss_df8e933611803a7b04634108eb2392f8a2c911c5.1920x1080.jpg?t=1582821311",
    tech: ["Unity", "iOS", "Android", "Windows", "macOS", "Steam"],
    live: "https://store.steampowered.com/app/648340/Harald_A_Game_of_Influence/",
    align: "object-[0px,-0px]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16"
        >
          Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 object-cover transition-all duration-[2000ms] ease-in-out ${project.align} group-hover:object-center`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 font-bold mb-4">{project.client}</p>
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
