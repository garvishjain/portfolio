import Experience from "./ExperienceComponent";
import { TypeAnimation } from "react-type-animation";
import mountainImg from '../assets/mountains.jpg'
import CV from '../assets/Garvish_Jain_CV.pdf'
import { FaDownload } from "react-icons/fa";


function AboutUs() {
    return (
        <div id='aboutus' className="relative">
            <img
                // src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                src={mountainImg}
                alt="banner"
                className="w-full h-[800px] object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
                {/* <p className="mt-4 text-lg">I am a Node.js Developer</p> */}
                <TypeAnimation
                    sequence={[
                        "Hi, I'm Garvish 👋",
                        1500,
                        "Backend Developer | Node.js 🚀",
                        1500,
                        "Building Scalable APIs & Systems",
                        1500,
                        "React Web Developer 📱",
                        1500,
                        // "I build scalable backend systems 🚀",
                        // 1500,
                        // "Node.js | Express | PostgreSQL",
                        // 1500,
                        // "I create high-performance APIs",
                        // 1500,
                    ]}
                    wrapper="p"
                    speed={80}
                    repeat={Infinity}
                    className="mt-4 text-lg"
                />
                {/* <HeroText /> */}

                <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300">
                    Hire Me
                </button><br/>
                <a href={CV} download="Garvish Jain CV.pdf">
                    <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition">
                        <FaDownload />
                        Download CV
                    </button>
                </a>
            </div>
        </div>
    );
}

export default AboutUs;