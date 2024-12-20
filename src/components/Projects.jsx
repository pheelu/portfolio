import {PROJECTS} from '../constants'
import { motion } from 'framer-motion';

const Projects = () => {
  return(
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
            whileInView={{ opacity : 1, y : 0 }}
            initial={{ opacity : 0, y : -50 }}
            transition = {{ duration : 0.5 }} 
            className="my-20 text-center text-4xl">
            Main{" "}
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                Projects
            </span>
      </motion.h2>
        <div className="px-4">
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-20 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity : 1, x : 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition = {{ duration : 0.5 }} 
                        className="w-full lg:w-1/4 px-4">
                        <img 
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="mb-6 rounded"
                         />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity : 1, x : 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition = {{ duration : 0.5 }}  
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded text-sm bg-neutral-900 px-2 py-1 font-medium text-purple-800">{tech}</span>
                        ))
                        }
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Projects