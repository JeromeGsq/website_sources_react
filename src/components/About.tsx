import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white-900/95"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl text-gray"
          >
            <h2 className="text-4xl font-bold mb-8">À propos</h2>
            <div className="space-y-4 text-lg">
              <p>
                Je suis Jérôme Ghesquière, développeur expérimenté spécialisé
                dans le développement d'applications mobiles Flutter et Unity.
              </p>
              <p>
                Avec plus de 8 ans d'expérience, j'ai acquis des compétences
                solides en matière de développement d'applications en Flutter,
                d'intégration UX/UI, et de formation.
              </p>
              <p>
                Mon parcours m'a permis de travailler avec des clients de renom
                tels qu'Orange, Monaco, et Floa Bank.
              </p>
              <p>
                Je suis passionné par les technologies de réalité virtuelle et
                augmentée, et j'ai contribué au développement de jeux vidéo,
                d'applications de réalité virtuelle, et d'applications mobiles
                B2B ou B2C pour différents clients.
              </p>
              <p>
                Je suis un développeur polyvalent et j'utilise différents outils
                comme VSCode, Figma, Firebase & Google Cloud, et les outils
                Microsoft Azure.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-2">Mobile</h3>
                <p>Flutter, Dart, iOS, Android</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-2">Web</h3>
                <p>Vue, Typescript, Nuxt, TailwindCSS</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-2">VR/AR</h3>
                <p>Unity, C#, AR/VR, Animation</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-2">Design</h3>
                <p>Figma, UX/UI, Zeplin</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-2">DevOps</h3>
                <p>Azure, Github, GitLab, CI/CD</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-2">OS</h3>
                <p>macOS, Windows, Linux</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden md:block py-20"
          >
            <img
              src="/assets/avatar.jpeg"
              alt="Jérôme Ghesquière"
              className="w-96 rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
