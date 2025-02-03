import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import spotify_project from "../assets/projects/Spotify_image.png";
import resized_spotify from "../assets/projects/resized_spotify.png";
import NBA_pic from "../assets/projects/NBA_pic.png";
import powerlifting from "../assets/projects/powerlifting.png";


import DataStructuresImage from "../assets/course_pics/DataStructuresImage.png";
// import AlgoImage from "../assets/courses/AlgoImage.png";
import AIImage from "../assets/course_pics/AIImage.png";
import resized_graphics from "../assets/course_pics/resized_graphics.png";
import roboticsImage from "../assets/course_pics/RoboticsImage.png";
import OOPImage from "../assets/course_pics/OOPImage.png";
import resized_robotics from "../assets/course_pics/resized_robotics.png";
import resized_OOP from "../assets/course_pics/resized_OOP.png";
import resized_DSA from "../assets/course_pics/DSA_resized.png";
import resized_AI from "../assets/course_pics/resized_AI.png";
import objs from "../assets/course_pics/Objects_Design.png";
import CS2110 from "../assets/course_pics/2110.png";

import Algo from "../assets/course_pics/Algo.png";
import ML from "../assets/course_pics/ML.png";


import snu from "../assets/Clubs/SNU.png";
import ios from "../assets/Clubs/IOS.png";
import wrek from "../assets/Clubs/WREK.png";
// import resized_DSA from "../assets/course_pics/DSA_resized.png";
// import resized_AI from "../assets/course_pics/resized_AI.png";

export const PROFILE_CONTENT = `I'm a full-stack developer passionate about building engaging and 
efficient web and mobile applications. I am currently pursuing a degree in Computer Science at the Georgia Institute of Technology, where 
I specialize in Artificial Intelligence and Media Technologies. Using this strong foundation in both front-end and back-end development through my education,
professional experience, and personal projects I have practiced creating seamless user experiences and robust systems.
Beyond web and app development, I have a keen interest in game design and exploring how technology can be leveraged to produce interactive and immersive worlds.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "5/2023 - 8/2023",
    role: "Apprentice Platform Engineer",
    company: "Savannah River Nuclear Solutions",
    description: `Assisted in departmental platform engineering tasks including DevOps engineering, server maintenance, internal tool development, and network administration and led weekly report-outs to leadership
Shadowed a large scale data migration process through the transfer of account information between platforms to support server and platform relocation while maintaining user-verification
Exposed to Microsoft Azure and its benefits as an Infrastructure, Platform, and Software as a service in order to discover conflicts with large scale integration in the department
`,
    technologies: ["Microsoft Azure", "Java Script", "Powerpoint", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Spotify Wrapped App",
    image: resized_spotify,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Java", "MySQL", "Kotlin", "Android Studio", "Spotify-Developer-Dashboard"],
  },
  {
    title: "NBA Statistical Analysis",
    image: NBA_pic,
    description:
      "Collected and cleansed decades of NBA stats, contracts, and player personal information to uncover trends and generate graphics to display these features",
    technologies: ["Python", "API", "Beautiful-Soup", "CSV", "Pandas", "Numpy", "Matplotlib"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: ,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  {
    title: "Powerlifting Data Analysis",
    image: powerlifting,
    description:
      "Large scale data analysis of relevant trends/advantages in powerlifting over the past decades. Collected, cleaned, and interpreted over 3,000,000 performances.",
    technologies: ["Python", "Matplotlib", "Pandas", "Numpy", "CSV", "Jupyter Notebook"],
  },
];

export const CONTACT = {
  address: "750 Fowler Street NW, ATL",
  phoneNo: "+1 (706)-814-1305 ",
  email: "cdiprete6@gatech.edu",
};

export const COURSES = [
  { name: "Data Structures & Algorithms", image: resized_DSA, description: "Learned data storage/manipulation structures through implementations. Practiced in algorithms using these structures with an emphasis on efficiency." },
  { name: "Artificial Intelligence", image: resized_AI, description: "Explore the fundamentals of AI, machine learning, and intelligent systems. Practiced classical AI techniques, such as; Markov Decision, Bayes Nets, And Constraint Satisfaction problems. " },
  { name: "Computer Graphics", image: resized_graphics, description: "Taught how images are generated & manipulated programmatically, and practiced in these methods through C++ and shader language projects." },
  { name: "Perception & Robotics", image: resized_robotics, description: "Studied the design and programming of robotic systems focused on decisions based on situational perception." },
  { name: "Object-Oriented Programming", image: resized_OOP, description: "Learned the principles of OOP and how to structure scalable software." },
  { name: "Machine Learning", image: ML, description: "Taught techniques in ML, emphasizing algorithms and their applications in real world data to extract useful knowledge for decision making and task support."},
  // {name: "Discrete Mathematics", image: AIImage, description: "BAHHHHHH"},
  {name: "Design & Analysis of Algorithms", image: Algo, description: "Explored principles & techniques for designing efficient algorithms to solve computational problems. Practiced techniques such as graph manipulation, div & conquer, dynamic programming, P/NP among others."},
  {name: "Objects & Design", image: objs, description:"Object-oriented programming methods for dealing with large programs. Introduces design methodology and notation, covering standard principles and practices in design."},
  {name: "Computer Organization & Programming", image: CS2110, description:"Introduction to computer hardware, circuits, machine language, assembly language, and C programming."},
];
export const CLUBS = [
  { name: "WREK Radio", image: wrek, description: "Learn how data is organized, stored, and manipulated for efficiency.", roles: ["Operator", "Design Team", "Music Selection Team"]},
  { name: "IOS Development Club", image: ios, description: "Member of an on-campus IOS app development club", roles: ["Developer"] },
  { name: "Sigma Nu", image: snu, description: "Brother of the Gamma Alpha Chapter, PC 22.", roles:["Athletic Chair"] },

];
