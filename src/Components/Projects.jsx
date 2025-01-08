// import {PROJECTS} from "../constants";
// const Projects = () => {
//     return (
//     <div className="border-b border-neutral-900 pb-4">
//         <h2 className="my-10 text-center text-4xl text-neutral-200">Projects</h2>
//         <div>
//             {PROJECTS.map((project, index) => (
//                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                     <div className="w-full lg:w-1/4">
//                         <img
//                             src={project.image}
//                             width={150}
//                             height={150}
//                             alt={project.title}
//                             className="mb-6 rounded"
//                             />    
//                     </div>
//                     <div className="w-full max-w-xl lg:w-3/4">
//                         <h6 className="mb-2 font-semibold text-orange-400">{project.title}</h6>
//                         <p className="mb-4 text-neutral-400">{project.description}</p>
//                         {project.technologies.map((tech, index) => (
//                             <span
//                                 key={index}
//                                 className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//     );
// };

// export default Projects

import {PROJECTS} from "../constants";
import {motion} from "framer-motion";
const Projects = () => {
    return (
    <motion.div 
        className="border-b border-neutral-900 pb-4 justify-items-center"
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x : 0}}
        transition={{duration: 5.0}}>
        <h2 className="my-12 text-center text-neutral-200 font-bold text-4xl lg:text-5xl">Projects</h2>


        <div className="flex flex-wrap">
    {PROJECTS.map((project, index) => (
        <div
            key={index}
            className="relative border border-purple-300 rounded-lg bg-neutral-900 mx-2 my-2"
            style={{ width: "320px" }} // Fixes horizontal size
        >
            {/* Image Section */}
            <motion.div className="w-full"
                whileInView={{ opacity: 1, x: 0}}
                initial={{opacity: 0, x : -100}}
                transition={{duration: 0.4}}
            >
                <img
                    src={project.image}
                    width={320}
                    height={200}
                    alt={project.title}
                    className="mb-4 rounded"
                />
            </motion.div>



            {/* Title Section */}
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration:.4}}
                className="w-full px-4"
            >
                <h6 className="mb-1 text-xl text-center font-semibold text-orange-400 tracking-wide">
                    {project.title}
                </h6>
            </motion.div>

                {/* Description Section */}

            <motion.div 
                className="w-full px-4 mt-2 mb-2"
                whileInView={{ opacity: 1, x: 0}}
                initial={{opacity: 0, x : -100}}
                transition={{duration: .3}}         
            >
                <p className="text-neutral-400 text-xs text-center">
                    {project.description}
                </p>
            </motion.div>

            {/* Technologies Section */}
            <motion.div 
                className="w-full px-4 text-center"
                whileInView={{ opacity: 1, x: 0}}
                initial={{opacity: 0, x : -100}}
                transition={{duration: .7}}
                >
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="rounded text-xs font-medium inline-block px-1 py-1 mx-1 my-0.5 border border-purple-900 bg-neutral-900 text-purple-800"
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>


            {/* Horizontal Borders via Pseudo-Element */}
            <div
                className="absolute left-0 bottom-0 h-[1px] w-full bg-purple-300"
                style={{ top: "100%" }}
            />
        </div>
    ))}
</div>

    </motion.div>
    );
};

export default Projects