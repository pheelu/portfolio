import { HERO_CONTENT } from '../constants';
import logo from '../assets/falogo.png'
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden : {x: 0, opacity: 0},
  visible : {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    }
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center">
          <motion.img
              src={logo}
              alt="logo"
              className="w-40 h-40 mb-20 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ //Da fixare
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              MSc Computer Science Student
            </motion.span>
          </div>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="my-2 mx-auto max-w-xl py-6 px-4 font-light tracking-tighter text-center">
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
