// import GT from "../assets/GT.png";
// const Education = () => {
//     return (
//         <div>
//             <div className="border-b border-transparent pb-4">
//                 <h2 className="mt-10 text-center font-semibold text-5xl text-neutral-200">Education</h2>
//             </div>
//             <div className="border-b border-transparent py-10 pl-36">
//                 <div>
//                     <div className="w-full">
//                         <div className="w-full flex pl-40"> {/* Flex for horizontal layout */}
//                             <img className="rounded-2xl" src={GT} alt="gt" />
//                             <div className="pl-10 text-left flex-wrap:flex"> {/* Stacks text vertically */}
//                                 <h2 className="text-white font-bold text-lg pl-16">Georgia Institute of Technology</h2>
//                                 <h2 className="text-white font-bold text-sm">Bachelors of Science | Computer Science | Artificial Intel & Media </h2>
//                                 <div>

//                                 </div>
//                                 {/* <h2 className="text-white font-bold text-sm">Minor | Industrial Design</h2> */}
//                                 <h2 className="text-white font-bold text-xs pl-32 mt-1 ">August 2022 - May 2026</h2>
//                                 <p className="text-white mt-3 mr-32 w-1/2 text-center">I am currently in my 3rd year of pursuing a bachelors degree in Computer Science at Georgia Tech, concentrating in Artificial Intelligence and Media Technologies. 
//                                 I am also pursuing a minor in industrial/product design.
//                                 </p>
//                             </div>
            


//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
    
//     );
// };
// export default Education;
import GT from "../assets/gatech.png";
const Education = () => {
    return (
        <div>
            <div className="border-b border-transparent">
                <h2 className="lg:mt-16 lg:pb-12 pb-12 pt-16 lg:pt-0 text-center font-semibold text-4xl lg:text-5xl text-neutral-200">Education</h2>
            </div>
            <div className="border-b border-transparent">
                <div>
                    <div className="w-full">
                        <div className="w-full flex flex-wrap justify-center"> {/* Flex for horizontal layout */}
                            <img 
                            
                                className="rounded-2xl w-32 h-18" src={GT} alt="gt" />
                            <div className="pl-6 text-left flex-wrap:flex"> {/* Stacks text vertically */}
                                <h2 className="text-yellow-500 font-bold text-sm lg:text-xl lg:mt-1">Georgia Institute of Technology</h2>
                                <h2 className="text-blue-500 font-bold text-xs lg:text-sm pb-1">Bachelors of Science | Computer Science | Artificial Intel & Media </h2>
                                <div>

                                </div>
                                {/* <h2 className="text-white font-bold text-sm">Minor | Industrial Design</h2> */}
                                <h2 className="text-white font-bold text-xs pb-2">August 2022 - May 2026</h2>
                            </div>
                        </div>
                        <div className="flex justify-center lg:my-4">
                        <p className="text-white w-full lg:w-1/2 text-center lg:px-6">I am currently in my 3rd year of pursuing a bachelors degree in Computer Science at Georgia Tech, concentrating in Artificial Intelligence and Media Technologies. 
                                    I am also pursuing a minor in industrial/product design.
                                    </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    );
};
export default Education;