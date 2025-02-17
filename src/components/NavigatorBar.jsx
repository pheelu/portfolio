import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa'; // Icona per il download
import { motion } from 'framer-motion';
import CV from '../assets/Filippo_Alzati_CV.pdf'; // Importa il file del CV

const NavigatorBar = () => {
  return (
    <nav className="flex flex-col items-center justify-between py-6 px-6 sm:px-8 sm:flex-row">
      <div className="flex flex-shrink-0 items-center">
        <motion.h1 
          initial={{x : -100, opacity: 0}} 
          animate={{x : 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.5}}
          className="text-4xl font-thin tracking-tight sm:text-6xl">
          Filippo Alzati
        </motion.h1>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xl sm:mt-0 sm:flex-row">
        <motion.a
          href="https://www.linkedin.com/in/filippo-alzati-a9428a215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div            
            initial={{ x: +100, opacity: 0 }} // Initial state: off-screen and invisible
            animate={{ x: 0, opacity: 1 }}    // Animate to on-screen and visible
            transition={{ duration: 0.5, delay: 0.5 }} // Smooth transition with delay
            whileHover={{
              scale: 1.2, // Enlarge on hover
              transition: { duration: 0.3 }, // Smooth transition for hover effect
            }} // Smooth transition duration
          >
            <FaLinkedin className="text-3xl sm:text-4xl hover:text-blue-500" />
          </motion.div>
        </motion.a>
        <motion.a
          href="https://github.com/pheelu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ x: +100, opacity: 0 }} // Initial state: off-screen and invisible
            animate={{ x: 0, opacity: 1 }}    // Animate to on-screen and visible
            transition={{ duration: 0.5, delay: 0.5 }} // Smooth transition with delay
            whileHover={{
              scale: 1.2, // Enlarge on hover
              transition: { duration: 0.3 },
            }}
          >
            <FaGithub className="text-3xl sm:text-4xl hover:text-gray-700" />
          </motion.div>
        </motion.a>
        {/* Pulsante di download del CV */}
        <motion.a
          href={CV} // Usa la variabile CV importata
          download="Filippo_Alzati_CV.pdf" // Nome del file che verrà scaricato
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ x: +100, opacity: 0 }} // Initial state: off-screen and invisible
            animate={{ x: 0, opacity: 1 }}    // Animate to on-screen and visible
            transition={{ duration: 0.5, delay: 0.5 }} // Smooth transition with delay
            whileHover={{
              scale: 1.2, // Enlarge on hover
              transition: { duration: 0.3 },
            }}
          >
            <FaFileDownload className="text-3xl sm:text-4xl hover:text-green-500" />
          </motion.div>
        </motion.a>
      </div>
    </nav>
  );
};

export default NavigatorBar;