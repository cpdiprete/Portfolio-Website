import { useNavigate } from "react-router-dom";

const AboutMe = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-2 text-xl">
                I am passionate about coding, web development, and game design. I also enjoy integrating technology with fashion and exploring innovative ideas!
            </p>
            <button
                onClick={() => navigate("/")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Back to Home
            </button>
        </div>
    );
};

export default AboutMe;
