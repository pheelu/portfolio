import { FaPython } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -5 },
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-20"
      >
        {[{ Icon: FaPython, color: "#306998", duration: 3 },
          { Icon: FaJsSquare, color: "#F7DF1E", duration: 4 },
          { Icon: SiMongodb, color: "#13AA52", duration: 3.5 },
          { Icon: SiNumpy, color: "#013243", duration: 4.5 },
          { Icon: SiPandas, color: "#150458", duration: 3.8 }].map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={`text-7xl`} style={{ color }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
