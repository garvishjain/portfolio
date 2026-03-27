import { FaNodeJs, FaReact, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

{/* <motion.div whileHover={{ scale: 1.05 }}></motion.div> */ }

function Skills() {
    const skills = [
        { name: "Node.js", icon: <FaNodeJs />, level: "90%" },
        { name: "Express.js", icon: <SiExpress />, level: "85%" },
        { name: "React.js", icon: <FaReact />, level: "80%" },
        { name: "JavaScript", icon: <SiJavascript />, level: "90%" },
        { name: "MongoDB", icon: <SiMongodb />, level: "85%" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: "80%" },
        { name: "SQL", icon: <FaDatabase />, level: "85%" },
        { name: "Git", icon: <FaGitAlt />, level: "80%" },
    ];
    //     const skills = [
    //     "Node.js",
    //     "Express.js",
    //     "React.js",
    //     "JavaScript",
    //     "MongoDB",
    //     "PostgreSQL",
    //     "REST APIs",
    //     "JWT Auth",
    //     "Git",
    //     "Firebase",
    //     "Azure Blob",
    //   ];

    return (
        <section id="skills" className="bg-gray-950 text-white py-16 px-6 md:px-20">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-yellow-400">My Skills</h2>
                <p className="text-gray-400 mt-2">Technologies I work with</p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                    <motion.div key={index}  whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition">
                        {/* Skill Name + Icon */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3 text-lg font-semibold">
                                <span className="text-2xl text-yellow-400">{skill.icon}</span>
                                {skill.name}
                            </div>
                            <span className="text-gray-400">{skill.level}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full">
                            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: skill.level }}></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

/** For Learning */
        // <section className="bg-gray-950 text-white py-16 px-6 md:px-20">

        //     <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
        //         My Skills
        //     </h2>

        //     {/* TAG CONTAINER */}
        //     <div className="flex flex-wrap justify-center gap-4">
        //         {skills.map((skill, index) => (
        //             <span
        //                 key={index}
        //                 className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition cursor-pointer"
        //             >
        //                 {skill}
        //             </span>
        //         ))}
        //     </div>

        // </section>
    );
}

export default Skills;