import { TiWorld } from "react-icons/ti";
import { BsChatRightDots } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y :-10},
  animate :{
      y : [10, -10],
      transition : {
          duration : duration,
          ease : "linear",
          repeat : Infinity,
          repeatType : "reverse",
      }
  }
})

const appearingProps = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -10 },
  transition: { duration: 0.5 },
};


const SoftSkills = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          {...appearingProps}
          className="my-20 text-center text-4xl">
          Soft{" "}
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
      </motion.h2>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 justify-center mb-32 max-w-5xl mx-auto">
          <div className="flex sm:flex-col flex-row items-center sm:space-y-6 space-x-6 sm:space-x-0">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              {...appearingProps}
            className="rounded-2xl border-4 border-neutral-800 p-8 flex items-center justify-center">
              <TiWorld className="text-7xl text-purple-800" />
            </motion.div>
            <div>
              <motion.h3 {...appearingProps} className="mt-2 text-center font-semibold text-xl">Languages</motion.h3>
              <motion.p {...appearingProps} className="text-center text-lg">I speak 4 languages!<br />Italian, English, Spanish, and French.</motion.p>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row items-center sm:space-y-6 space-x-6 sm:space-x-0">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              {...appearingProps}
               className="rounded-2xl border-4 border-neutral-800 p-8 flex items-center justify-center">
              <BsChatRightDots className="text-7xl text-purple-800" />
            </motion.div>
            <div>
              <motion.h3 {...appearingProps} className="mt-2 text-center font-semibold text-xl">Communication</motion.h3>
              <motion.p {...appearingProps} className="text-center text-lg">I have worked as a waiter, interacting with customers and learning how to engage effectively with people.</motion.p>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row items-center sm:space-y-6 space-x-6 sm:space-x-0">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              {...appearingProps}
              className="rounded-2xl border-4 border-neutral-800 p-8 flex items-center justify-center">
              <TfiStatsUp className="text-7xl text-purple-800" />
            </motion.div>
            <div>
              <motion.h3 {...appearingProps} className="mt-2 text-center font-semibold text-xl">Adaptability</motion.h3>
              <motion.p {...appearingProps} className="text-center text-lg">I strive to stay updated and expand my knowledge, such as this portfolio.</motion.p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center max-w-5xl mx-auto">
          <div className="flex sm:flex-col flex-row items-center sm:space-y-6 space-x-6 sm:space-x-0">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              {...appearingProps}
              className="rounded-2xl border-4 border-neutral-800 p-8 flex items-center justify-center">
              <FaRegLightbulb className="text-7xl text-purple-800" />
            </motion.div>
            <div>
              <motion.h3 {...appearingProps} className="mt-2 text-center font-semibold text-xl">Critical Thinking</motion.h3>
              <motion.p {...appearingProps} className="text-center text-lg">I don’t settle for results unless I fully understand them, ensuring thorough comprehension.</motion.p>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row items-center sm:space-y-6 space-x-6 sm:space-x-0 mb-20">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              {...appearingProps}
              className="rounded-2xl border-4 border-neutral-800 p-8 flex items-center justify-center">
              <FaMagnifyingGlass className="text-7xl text-purple-800" />
            </motion.div>
            <div>
              <motion.h3 {...appearingProps} className="mt-2 text-center font-semibold text-xl">Strategic Thinking</motion.h3>
              <motion.p {...appearingProps} className="text-center text-lg">I believe in working smarter and approaching challenges with a strategic mindset.</motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
