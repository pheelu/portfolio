import { FaPython } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
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

const Technologies = () => {
  return(
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
            whileInView={{ opacity : 1, y : 0 }}
            initial={{ opacity : 0, y : -50 }}
            transition = {{ duration : 0.5 }}
            className="my-20 text-center text-4xl ">Technologies</motion.h2>
        <motion.div
            whileInView={{ opacity : 1, x : 0 }}
            initial={{ opacity : 0, x : 0 }}
            transition = {{ duration : 1 }}
            className="flex flex-wrap itemx-center justify-center gap-4 mb-20">
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-[#306998]" />
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }} 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJsSquare className="text-7xl text-[#F7DF1E]"/>
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }} 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-[#13AA52]" />
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNumpy className="text-7xl text-[#013243]" />
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPandas className="text-7xl text-[#150458]" />
            </motion.div>
        </motion.div>
    </div>
    )
}

export default Technologies