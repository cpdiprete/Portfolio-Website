import React, { useRef, useState } from 'react';
import { CLUBS } from '../constants';
const Extracurriculars = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        sliderRef.current.slickPause();
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        sliderRef.current.slickPlay();
        setHoveredIndex(null);
    };



    return (
        <div>
            <div className="border-b border-transparent">
                <h2 className="lg:mt-16 lg:pb-12 pb-12 pt-16 lg:pt-0 text-center font-semibold text-4xl lg:text-5xl text-neutral-200">Clubs</h2>

                {CLUBS.map((club, index) => (
                        <div key={index}>
                            <div
                                className={`p-4 rounded-lg shadow-md bg-purple-500 text-neutral-300 flex flex-center ${
                                    hoveredIndex === index ? "bg-purple-200" : ""
                                }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={club.image}
                                    width={200}
                                    height={200}
                                    alt={club.name}
                                    className="text-center"
                                />
                                <p className="text-xs lg:text-lg font-bold">{club.name} </p>
                                {hoveredIndex === index && (
                                    <div className="px-4 py-1 rounded text-sm text-neutral-200 font-semibold ">
                                        {club.description}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    
    );
};
export default Extracurriculars;