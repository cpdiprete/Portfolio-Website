import aboutImg from "../assets/about.jpg";
import ladiesImg from "../assets/ladies.png";
import {ABOUT_TEXT} from "../constants";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl text-white">
                About Me
            </h2>
            <div className="flex flex-wrap lg:flex-nowrap items-start">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img className="rounded-2xl" src={ladiesImg} alt="about" />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <p className="my-10 mx-10 max-w-xl py-6 text-white text-lg">{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    );
};

export default About