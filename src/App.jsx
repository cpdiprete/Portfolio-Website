import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ResumeLink from "./Components/ResumeLink";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Courses from "./Components/Courses";
import Extracurriculars from "./Components/Extracurriculars";

import AboutMe from "./Personal/AboutMe";
import "./index.css";
// import Music from "./Personal/Music";

const App = () => {
    return (
        <Router>
            <div className="overflow-x-hidden test-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
                <div className="fixed top-0 -z-10 h-full w-full">
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </div>

                <div className="container mx-auto px-8 items-center">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Navbar />
                                    <Profile />
                                    <Technologies />
                                    <Experience />
                                    <Projects />
                                    <Education />
                                    <Courses />
                                    <Contact />
                                </>
                            }
                        />
                        <Route path="/about-me"
                        element={
                            <>
                            <AboutMe />
                            {/* <Music/> */}

                            </>
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;