import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiPython } from "react-icons/si";
import {animate, motion} from "framer-motion";
import { useState } from "react";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10], 
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
    static: {
        y: 0,
        transition: { duration: 0 }, 
    },
});

const Technologies = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    return (
        <div className="border-b border-neutral-800 pb-24 lg:pt-4">
            <h2 className="pt-16 lg:pt-0 lg:mt-1 mb-2 text-center text-4xl lg:text-5xl font-bold text-neutral-200">Skills</h2>
            <p className=" mx-auto max-w-3xl text-center text-xl text-white">Technologies and tools that I have developed proficiency with through professional, academic, and personal experience</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"                   
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-white wrap-text hover:animate-pulse"
                    whileHover="static"
                    onMouseEnter={() => setHoveredSkill("React")}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                    <h2 className="text-center text-sm text-white">REACT
                    </h2>
                    {hoveredSkill === "React" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 w-64 rounded-md bg-neutral-800 p-4 text-white shadow-lg"
                        >
                            <h3 className="text-lg font-bold">React | 2-yr</h3>
                            <p className="text-sm">
                                Self taught and practiced through personal projects and tutorials.
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    variants = {iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-white wrap-text hover:animate-pulse"
                    whileHover="static"
                    onMouseEnter={() => setHoveredSkill("C")}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                        alt="C Logo"
                        className="w-16 h-16"
                    />
                    <h2 className="pt-2 text-center text-sm text-white">C/C++
                    </h2>
                    {hoveredSkill === "C" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 w-64 rounded-md bg-neutral-800 p-4 text-white shadow-lg"
                        >
                            <h3 className="text-lg font-bold">C/C++ | 2-yr</h3>
                            <p className="text-sm">
                                Taught and practiced through GT education, experience in computer graphics via C++ and GLSL(OpenGL Shading Language)
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div 
                    variants = {iconVariants(2.5)}
                    initial="initial"
                    animate="animate"    
                    className="relative rounded-2xl border-4 border-neutral-800 p-4 wrap-text hover:animate-pulse"
                    whileHover="static"
                    onMouseEnter={() => setHoveredSkill("Python")}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                        alt="Python Logo"
                        className="w-16 h-16"
                    />
                    <h2 className="pt-2 text-center text-sm text-white">PYTHON
                    </h2>
                    {hoveredSkill === "Python" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 w-64 rounded-md bg-neutral-800 p-4 text-white shadow-lg"
                        >
                            <h3 className="text-lg font-bold">Python | 4-yr</h3>
                            <p className="text-sm">
                                *Taught and practiced through GT education and personal projects. <br/>
                                *Well versed in libraries such as tensorflow, numpy, matplotlib, and pandas among others.
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    variants = {iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    whileHover="static"
                    onMouseEnter={() => setHoveredSkill("SQL")}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative rounded-2xl border-4 border-neutral-800 p-4 wrap-text hover:animate-pulse">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                        alt="SQL Logo"
                        className="w-auto h-16"
                    />
                    <h2 className="pt-2 text-center text-sm text-white">SQL/MySQL
                    </h2>
                    {hoveredSkill === "SQL" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 w-64 rounded-md bg-neutral-800 p-4 text-white shadow-lg"
                        >
                            <h3 className="text-lg font-bold">SQL/MySQL | 2-yr</h3>
                            <p className="text-sm">
                                Taught and practiced through GT education/projects
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    variants = {iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    whileHover="static"
                    className="relative rounded-2xl border-4 border-neutral-800 p-4 wrap-text hover:animate-pulse"
                    onMouseEnter={() => setHoveredSkill("Java")}
                    onMouseLeave={() => setHoveredSkill(null)}
                    >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                        alt="Java Logo"
                        className="w-16 h-16"
                    />
                    <h2 className="pt-2 text-center text-sm text-white">Java
                    </h2>

                    {hoveredSkill === "Java" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 w-64 rounded-md bg-neutral-800 p-4 text-white shadow-lg"
                        >
                            <h3 className="text-lg font-bold">Java | 3-yr</h3>
                            <p className="text-sm">                                
                                Taught and practiced through GT education/projects
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    variants = {iconVariants(2.2)}
                    initial="initial"
                    animate="animate"
                    whileHover="static"
                    onMouseEnter={() => setHoveredSkill("JavaScript")}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative rounded-2xl border-4 border-neutral-800 p-4 wrap-text hover:animate-pulse">
                    <SiJavascript
                        className="text-7xl"
                        style={{ color: '#F7DF1E' }} // JavaScript Yellow
                    />
                    <h2 className="pt-2 text-center text-sm text-white">JavaScript
                    </h2>
                    {hoveredSkill === "JavaScript" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 w-64 rounded-md bg-neutral-800 p-4 text-white shadow-lg"
                        >
                            <h3 className="text-lg font-bold">JavaScript | 2-yr</h3>
                            <p className="text-sm">
                                Experienced in JavaScript for building dynamic web applications,
                                developing user interfaces, and handling backend logic using Node.js.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
            
        </div>
    );
};

export default Technologies;
