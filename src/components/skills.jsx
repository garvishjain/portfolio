import { motion } from "framer-motion";

function Skillsdummy() {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Auth",
        "Worker Threads",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "MongoDB Aggregation",
        "PostgreSQL",
        "SQL",
      ],
    },
    {
      title: "Tools & Services",
      skills: [
        "Git",
        "Firebase Notifications",
        "Azure Blob Storage",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-16 px-6 md:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2">
          Technologies & tools I use to build scalable applications
        </p>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              {category.title}
            </h3>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skillsdummy;