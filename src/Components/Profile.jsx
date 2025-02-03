// import { PROFILE_CONTENT } from "../constants";
// import profilePic from "../assets/kevinRushProfile.png";
// import upchuck from "../assets/Upchuck.jpg";
// import ResumeLink from "../Components/ResumeLink";

// import {motion} from "framer-motion";
// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay},
//     },
// });
// const Profile = () => {
//     return (
//     <div className="mx-20 pl-16 border-b border-neutral-900 pb-2 lg:mb-35">
//         <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//             <div className="flex flex-col items-center lg:items-start">
//                 <motion.h1 
//                     variants={container(0.1)}
//                     initial="hidden"
//                     animate="visible"
//                     className="pb-6 font-thick tracking-tight lg:mt-10 text-7xl text-white"
//                 >
//                     Calvin DiPrete
//                 </motion.h1>
//                 <motion.span 
//                     variants={container(0.2)}
//                     initial="hidden"
//                     animate="visible"
//                     className="bg-gradient-to-r from-pink-300 via-slate-500 
//                     to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent pl-1"
//                 >
//                     Full Stack Developer
//                 </motion.span>

//                 <motion.div
//                     variants={container(0.4)}
//                     initial="hidden"
//                     animate="visible"
//                     className="my-2 max-w-xl pt-4 font-light tracking-tight text-white text-2xl"
//                 >
//                     <p className="font-semibold text-neutral-400 tracking-normal pl-1">{PROFILE_CONTENT}</p>
//                     <div className="mt-1 flex justify-start tracking-tight"> {/* Add margin for spacing */}
//                         <ResumeLink />
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
            
//             <div className="mt-16 w-full lg:w-1/2 lg:p-8">
//                 <div className="flex-justify-center">
//                     <motion.img
//                     src={upchuck}
//                     initial={{ x:100, opacity:0 }}
//                     animate={{x:0, opacity:1}}
//                     transition={{duration: 1, delay: 0.5}}
//                     alt="profile_pic"
//                     className="w-5/6 h-auto rounded-lg object-cover"                    
//                     />
//                 </div>

//             </div>
//         </div>

//     </div>
//     );
// };

// export default Profile
// import { PROFILE_CONTENT } from "../constants";
// import profilePic from "../assets/kevinRushProfile.png";
// import upchuck from "../assets/Upchuck.jpg";
// import meSmiling from "../assets/MeSmiling.jpeg";
// import pic from "../assets/pic.jpg";
// import ResumeLink from "../Components/ResumeLink";

// import {motion} from "framer-motion";
// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay},
//     },
// });
// const Profile = () => {
//     return (
//     <div className="border-b border-neutral-900 lg:pb-4 lg:mb-35 flex items-center lg:mx-32 my-16 lg:my-0 ">
//         <div className="flex flex-wrap ">
//             <div className="w-full lg:w-1/2">
//                 <div className="flex flex-col items-center lg:items-start">
//                     <motion.h1 
//                         variants={container(0.1)}
//                         initial="hidden"
//                         animate="visible"
//                         className="pb-12 lg:pb-6 lg:pb-10 text-5xl font-thick tracking-tight text-white lg:mt-2 mt-2 lg:text-8xl"
//                     >
//                         Calvin DiPrete
//                     </motion.h1>
//                     <motion.span 
//                         variants={container(0.2)}
//                         initial="hidden"
//                         animate="visible"
//                         className="bg-gradient-to-r from-pink-300 via-slate-500 
//                         to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent text-center pb-4"
//                     >
//                         Full Stack Developer
//                     </motion.span>

//                     <motion.div
//                         variants={container(0.4)}
//                         initial="hidden"
//                         animate="visible"
//                         className="lg:my-2 max-w-xl pt-4 font-light tracking-tight text-white text-2xl"
//                     >
//                         <p className="font-semibold text-neutral-400 tracking-normal text-sm lg:text-2xl mx-4 lg:mx-0">{PROFILE_CONTENT}</p>
//                         <div className=" flex justify-start tracking-tight"> {/* Add margin for spacing */}
//                             <ResumeLink />
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
            
//             <div className="lg:mt-16 w-full lg:w-1/2 lg:p-8">
//                 <div className="flex-justify-center">
//                     <motion.img
//                     src={pic}
//                     initial={{ x:100, opacity:0 }}
//                     animate={{x:0, opacity:1}}
//                     transition={{duration: 1, delay: 0.5}}
//                     alt="profile_pic"
//                     className="w-full h-auto rounded-lg object-cover"                    
//                     />
//                 </div>

//             </div>
//         </div>

//     </div>
//     );
// };

// export default Profile

import { PROFILE_CONTENT } from "../constants";
import pic from "../assets/pic.jpg";
import ResumeLink from "../Components/ResumeLink";
import { motion } from "framer-motion";

const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Profile = () => {
    return (
    <div className=" my-16 lg:mx-32 lg:pb-4 lg:mb-35">
      {/* Desktop Layout */}
        <div className="hidden lg:flex items-center">
        {/* Left Column: All Text */}
        <div className="w-1/2 flex flex-col items-start">
            <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="pb-6 md:text-[5.0rem] lg:text-8xl font-thick tracking-tight text-white mt-2"
            >
            Calvin DiPrete
            </motion.h1>
            <motion.span
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="pb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
            Full Stack Developer
            </motion.span>
            <motion.div
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="max-w-xl pt-4 font-light tracking-tight text-white text-2xl"
            >
            <p className="font-semibold text-neutral-400 text-2xl">
                {PROFILE_CONTENT}
            </p>
            <div className="flex justify-start">
                <ResumeLink />
            </div>
            </motion.div>
        </div>
        {/* Right Column: Picture */}
        <div className="w-1/2 mt-2 p-8">
            <div className="flex justify-center">
            <motion.img
                src={pic}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                alt="profile_pic"
                className="w-full h-auto rounded-lg object-cover"
            />
            </div>
        </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden mx-4">
        {/* 1. Name */}
        <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-thick tracking-tight text-white mt-2 pb-4 flex justify-center"
        >
            Calvin DiPrete
        </motion.h1>
        {/* 2. Picture */}
        <div className="my-4">
            <div className="flex justify-center">
            <motion.img
                src={pic}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                alt="profile_pic"
                className="w-full h-auto rounded-lg object-cover"
            />
            </div>
        </div>
        {/* 3. Background Text and 4. Resume Link */}
        <div className="text-center">
            <motion.span
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="pb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center"
            >
            Full Stack Developer
            </motion.span>
            <motion.div
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="pt-4 font-light tracking-tight text-white text-xl"
            >
            <p className="font-semibold text-neutral-400 text-sm mt-4">
                {PROFILE_CONTENT}
            </p>
            <div className="flex justify-center mt-4">
                <ResumeLink />
            </div>
            </motion.div>
        </div>
        </div>
    </div>
    );
};

export default Profile;
