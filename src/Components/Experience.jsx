import {EXPERIENCES} from "../constants";
import SRNL_Image from "../assets/SRNL_image.png";
const Experience = () => {
    return (
    <div className="border-b border-neutral-800 pb-4 mt-6">
        <h2 className="mb-10 mt-6 text-center font-bold text-neutral-200 text-4xl lg:text-5xl">Experience</h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <div className="w-full lg:w-3/4 flex justify-center">
                        <img
                            className="rounded-2xl w-48 h-auto lg:w-64" // Adjust width and maintain aspect ratio
                            src={SRNL_Image}
                            alt="srns"
                        />
                    </div>
                </div>
                
                <div className="w-full max-w-xl lg:w-3/4">
                <p className="text-sm text-red-400"> {experience.year}</p>
                    <h6 className="mb-3 mt-1 text-sm font-semibold text-neutral-400">{experience.role} -{" "}
                        <span className = "text-sm text-purple-100">
                            {experience.company}
                        </span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium rounded bg-neutral-900 text-purple-800">{tech}</span>
                    ))}
                </div>
            </div>
            ))}
        </div>
    </div>
    );
};

export default Experience;