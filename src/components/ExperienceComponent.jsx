

function Experience() {
  return (
    // <section className="bg-gray-900 text-white py-20 px-6">
    <section id="experience" className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My Experience
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-yellow-400 transform -translate-x-1/2"></div>

        {/* Item 1 */}
        <div className="mb-12 flex justify-between items-center w-full">
          
          <div className="w-5/12"></div>

          {/* Circle */}
          <div className="z-10 bg-yellow-400 w-6 h-6 rounded-full"></div>

          {/* Content */}
          <div className="w-5/12 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 hover:scale-105  transition duration-300">
            <h3 className="text-xl font-semibold">Node.js Backend Developer</h3>
            <p className="text-yellow-400">2023 - Present</p>
            <p className="mt-3 text-gray-300">
              Built scalable APIs using Node.js, Express, PostgreSQL, and microservices architecture.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="mb-12 flex justify-between items-center w-full">
          
          {/* Content */}
          {/* <div className="w-5/12 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 hover:scale-105  transition duration-300"> */}
          <div className="w-5/12 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-2 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">React Native Developer</h3>
            <p className="text-yellow-400">2022 - 2023</p>
            <p className="mt-3 text-gray-300">
              Developed mobile apps with API integration and push notifications.
            </p>
          </div>

          {/* Circle */}
          <div className="z-10 bg-yellow-400 w-6 h-6 rounded-full"></div>

          <div className="w-5/12"></div>
        </div>

      </div>
    </section>
  );
}

export default Experience;