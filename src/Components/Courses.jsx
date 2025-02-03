import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { COURSES } from '../constants';

const Courses = () => {
    const sliderRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default for screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        autoplaySpeed: 900,  // even faster for very small screens
                    },
                },
                // {
                //     breakpoint: 480,
                //     settings: {
                //         slidesToShow: 1,
                //         autoplaySpeed: 900,  // even faster for very small screens
                //     },
                // },
            ],
    };

    const handleMouseEnter = (index) => {
        sliderRef.current.slickPause();
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        sliderRef.current.slickPlay();
        setHoveredIndex(null);
    };

    // const handleSidebarClick = (index) => {
    //     sliderRef.current.slickGoTo(index);
    //     setHoveredIndex(index); // Optional: Show the hovered effect when selected
    // };

    return (
        <div className="relevant-courses text-white flex justify-center items-center">
            {/* Sidebar */}
            {/* <div className="sidebar w-1/4 mr-6">
                <ul className="space-y-2">
                    {COURSES.map((course, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer p-2 rounded-md text-center ${
                                hoveredIndex === index ? "bg-purple-200 text-neutral-800" : "bg-gray-800"
                            }`}
                            // onClick={() => handleSidebarClick(index)}
                        >
                            {course.name}
                        </li>
                    ))}
                </ul>
            </div> */}

            {/* Carousel */}
            <div className="carousel w-full lg:w-3/4 lg:pt-12">
                <h2 className="text-center text-3xl font-bold mb-4">Relevant Courses</h2>
                <Slider ref={sliderRef} {...settings}>
                    {COURSES.map((course, index) => (
                        <div key={index}>
                            <div
                                className={`p-4 rounded-lg shadow-md text-center ${
                                    hoveredIndex === index ? "bg-purple-200 text-neutral-800" : ""
                                }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    className="w-full h-auto object-cover rounded-md mb-1"
                                />
                                <p className="text-xs lg:text-lg font-bold">{course.name} </p>
                                {hoveredIndex === index && (
                                    <div className="lg:px-2 lg:py-1 rounded text-[0.625rem] lg:text-sm text-neutral-800 lg:font-semibold">
                                        {course.description}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Courses;
