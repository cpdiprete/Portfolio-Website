import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import About from "./About";


const Navbar = () => {
    return (
        <div className="flex justify-center">
        <nav className="mb-4 lg:mb-16 flex lg:items-right justify-between w-full lg:w-5/6 border-b border-purple-300">
            <div className="flex flex-shrink-0 items-center">
                {/* <img className="mx-2 w-10" src={logo} alt="logo"/>
                 */}
                {/* <About/> */}
            </div>

            <div className="lg:mx-8 my-2 lg:my-8 flex items-center justify-center gap-4 text-white lg:text-4xl text-2xl">

            <a
                href="https://www.linkedin.com/in/calvin-diprete-77b0552b1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 hover:animate-pulse"
            >
                <FaLinkedin/>
            </a>
            <a
                target="_blank" 
                rel="noreferrer"
                href="https://github.com/cpdiprete"
            >
                <FaGithub className="hover:text-blue-200 hover:animate-pulse"/>
            </a>

            <a
                target="_blank" 
                rel="noreferrer"
                href="https://www.instagram.com/calvin.diprete/"
            >
                <FaInstagram className="hover:text-blue-200 hover:animate-pulse"/>
            </a>

            </div>
        </nav>
    </div>
    );
};

export default Navbar;





// const Navbar = () => {
//     return (
//         <nav className="mb-4 flex items-center justify-between py-2 border-b border-purple-300 px-2 mx-32">
//             <div className="flex flex-shrink-0 items-center">
//                 <img className="mx-2 w-10" src={logo} alt="logo"/>
//             </div>


//             <div className="flex justify-center my-8 ml-80">
//             <a 
//                 href="about_me_link" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="inline-block border border-neutral-800 bg-purple-300 py-2 rounded-md hover:bg-blue-200"
//             >
//                 {/* <h3 className="text-center text-3xl text-white">ABOUT ME</h3> */}
//             </a>
//         </div>
//             <div className="m-4 mr-10 flex items-center justify-center gap-4 text-white text-4xl">

//             <a
//                 href="https://www.linkedin.com/in/calvin-diprete-77b0552b1" // Replace with your actual LinkedIn URL
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-200 hover:animate-pulse"
//             >
//                 <FaLinkedin/>
//             </a>
//             <a
//                 target="_blank" 
//                 rel="noreferrer"
//                 href="https://github.com/cpdiprete"
//             >
//                 <FaGithub className="hover:text-blue-200 hover:animate-pulse"/>
//             </a>

//             <a
//                 target="_blank" 
//                 rel="noreferrer"
//                 href="https://www.instagram.com/calvin.diprete/"
//             >
//                 <FaInstagram className="hover:text-blue-200 hover:animate-pulse"/>
//             </a>

//             </div>
//         </nav>
//     );
// };

// export default Navbar;