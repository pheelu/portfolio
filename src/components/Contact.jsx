import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className="max-w-lg mx-auto border border-white rounded-xl p-6 mx-2">
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
            className="text-white hover:text-neutral-300 transition-colors duration-300"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;