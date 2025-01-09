import { Link } from "react-router-dom";

const About = () => {
    return (
        <button className="text-black text-2xl bg-purple-200">
            <Link to="/about-me">ABOUT ME</Link>
        </button>
    );
};

export default About;