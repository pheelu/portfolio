import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="px-4">
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-20 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {education.subject} -{' '}
                <a 
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-800 hover:text-blue-500 cursor-pointer border-b border-transparent hover:border-blue-500"
                >
                  {education.at}
                  {' '}
                  <FaExternalLinkAlt className="inline-block mb-1 ml-1 mr-1" />
                </a>{' '}
                in{' '}
                <span className="mr-2 mt-4 rounded text-sm bg-neutral-900 px-2 py-1 font-medium text-green-500">
                  {education.country}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
              {education.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded text-sm bg-neutral-900 px-2 py-1 font-medium text-purple-800"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
