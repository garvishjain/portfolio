import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Retail Eazy",
      description:
        "A live mobile app for retailers to manage orders, billing, and invoices with offline sync capability.",
      tech: ["Node.js", "Express", "PostgreSQL", "Firebase", "Azure Blob"],
      github: "#",
      live: "#",
    },
    {
      title: "The Watts",
      description:
        "Inventory management system for an electronics company with role-based access and multi-operator handling.",
      tech: ["Node.js", "Sequelize", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "CSV/XLSX Data Processor",
      description:
        "High-performance data upload system using Worker Threads to process large CSV/XLSX files into MongoDB.",
      tech: ["Node.js", "MongoDB", "Worker Threads"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6 md:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">
          My Projects
        </h2>
        <p className="text-gray-400 mt-2">
          Some of my real-world work and personal projects
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4 text-sm">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 rounded-full text-xs hover:bg-yellow-400 hover:text-black transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;