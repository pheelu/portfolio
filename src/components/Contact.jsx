import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CV from '../assets/Filippo_Alzati_CV.pdf';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact{" "}
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <div className="max-w-lg mx-auto p-6 mx-2 relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 p-1 -z-10">
          <div className="bg-neutral-900 rounded-lg h-full w-full"></div>
        </div>
        <div className="relative">
          <div className="flex justify-center mt-2 mb-8 space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/filippo-alzati-a9428a215/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
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
                initial={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
              >
                <FaGithub className="text-3xl sm:text-4xl hover:text-gray-700" />
              </motion.div>
            </motion.a>
          </div>
          <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a
              href={`mailto:${CONTACT.email}`} // Opens default email client
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-medium hover:opacity-80 transition-opacity duration-300"
            >
              {CONTACT.email}
            </a>
          </div>
          {/* Download CV Button */}
          <div className="flex justify-center mt-8">
            <motion.a
              href={CV}
              download="Filippo_Alzati_CV.pdf"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;