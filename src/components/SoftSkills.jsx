import { TiWorld } from "react-icons/ti";
import { BsChatRightDots } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { motion } from "framer-motion";

const appearingProps = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -5 },
  transition: { duration: 0.4 },
};

const SoftSkills = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 {...appearingProps} className="my-20 text-center text-4xl">
        Soft{" "}
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-center mb-24 max-w-5xl mx-auto">
          {[
            {
              icon: <TiWorld className="text-5xl text-purple-800" />,
              title: "Languages",
              text: "I speak 4 languages!\nItalian, English, Spanish, and French.",
            },
            {
              icon: <BsChatRightDots className="text-5xl text-purple-800" />,
              title: "Communication",
              text: "I have worked as a waiter, interacting with customers and learning how to engage effectively with people.",
            },
            {
              icon: <TfiStatsUp className="text-5xl text-purple-800" />,
              title: "Adaptability",
              text: "I strive to stay updated and expand my knowledge, such as this portfolio.",
            },
          ].map((skill, index) => (
            <div key={index} className="flex sm:flex-col flex-row items-center sm:space-y-4 space-x-4 sm:space-x-0">
              <motion.div
                {...appearingProps}
                className="rounded-2xl border-4 border-neutral-800 p-6 flex items-center justify-center"
              >
                {skill.icon}
              </motion.div>
              <div>
                <motion.h3 {...appearingProps} className="mt-2 text-center font-semibold text-xl">
                  {skill.title}
                </motion.h3>
                <motion.p {...appearingProps} className="text-center text-sm mt-2">
                  {skill.text}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
