import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity : 1}}
        initial={{ opacity : 0,}}
        transition = {{ duration : 1 }}
        className="my-20 text-center text-4xl">
        About{" "}
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Medasdasdas
        </span>
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        <motion.div 
          whileInView={{ opacity : 1, x : 0 }}
          initial={{ opacity : 0, x : 0 }}
          transition = {{ duration : 2 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center text-center">
            <p className="mx-auto max-w-xl px-4 font-light tracking-tighter">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
