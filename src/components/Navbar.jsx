import { useState } from "react";
// import mountainImg from '../assets/mountains.jpg'
// import HeroText from "./DashboardComponent";
// import { TypeAnimation } from "react-type-animation";
// import Experience from "./ExperienceComponent";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass =
            "hover:text-yellow-400 cursor-pointer transition";

            const activeClass = "text-yellow-400";

    return (
        <>
            <nav className="bg-gray-900 text-white px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold">My Portfolio</h1>

                    {/* Desktop Menu */}
                    <ul className="md: flex items-center gap-10">
                        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer">About</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                    </ul>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col gap-4 mt-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                )}
            </nav>

            
            <nav className="bg-gray-900 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold">My Portfolio</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10">
                        <Link to="aboutus" smooth={true} duration={500} offset={-100} spy={true} activeClass="text-yellow-400">Home</Link>
                        <Link to="experience" smooth={true} duration={500} offset={-50} spy={true} activeClass="text-yellow-400">Experience</Link>
                        <Link to="projects" smooth={true} duration={500} offset={-50} spy={true} activeClass="text-yellow-400">Projects</Link>
                        <Link to="skills" smooth={true} duration={500} spy={true} activeClass="text-yellow-400">Skills</Link>
                        <Link to="contacts" smooth={true} duration={500} spy={true} activeClass="text-yellow-400">Contact</Link>
                    </ul>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col gap-4 mt-4">
                        <li>
                            <NavLink to="/" onClick={() => setIsOpen(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" onClick={() => setIsOpen(false)}>
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                )}
            </nav>

        </>
    );
}

export default Navbar;