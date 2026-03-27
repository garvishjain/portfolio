// import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
// import { Link } from "react-scroll";


// function Footer() {
//   return (
//     <footer id="contacts" className="bg-gray-900 text-white px-6 md:px-20 py-10">
//       <div className="grid md:grid-cols-3 gap-10">

//         {/* About */}
//         <div>
//           <h2 className="text-2xl font-bold text-yellow-400 mb-4">
//             Garvish Jain
//           </h2>
//           <p className="text-gray-400">
//             Backend Developer specializing in Node.js, Express, and scalable APIs.
//             Passionate about building efficient and high-performance applications.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-yellow-400">
//             Quick Links
//           </h3>
//           <ul className="space-y-2">
//             <li><Link to="aboutus" smooth={true} duration={500}  offset={-100} spy={true} >Home</Link></li>
//             {/* <Link to="aboutus" smooth={true} duration={500}  offset={-100} spy={true} >About</Link> */}
//             <li><Link to="experience" smooth={true} duration={500}  offset={-50} spy={true} >Experience</Link></li>
//             <li><Link to="projects" smooth={true} duration={500}  offset={-50} spy={true} >Projects</Link></li>
//             <li><Link to="skills" smooth={true} duration={500}  offset={-30} spy={true} >Skills</Link></li>
// {/* 
//             <li><a href="#home" className="hover:text-yellow-400">Home</a></li> */}
//             {/* <li><a href="#about" className="hover:text-yellow-400">About</a></li>
//             <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
//             <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li> */}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-yellow-400">
//             Contact
//           </h3>
//           <div className="space-y-3 text-gray-400">

//             <div className="flex items-center gap-3">
//               <FaEnvelope />
//               <span>garvishjain1997@gmail.com</span>
//             </div>

//             <div className="flex items-center gap-3">
//               <FaPhone />
//               <span>+91 8305104770</span>
//             </div>

//             <div className="flex gap-4 mt-4 text-xl">
//               <a
//                 href="https://github.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-yellow-400 transition"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/garvish-jain-a07a651b3/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-yellow-400 transition"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} Garvish Jain. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Message sent successfully!");

      // Clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <footer id="contacts" className="bg-gray-900 text-white px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Garvish Jain</h2>
          <p className="text-gray-400">
            Backend Developer specializing in Node.js, Express, and scalable APIs.
            Passionate about building efficient and high-performance applications.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Contact</h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>garvishjain1997@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone />
              <span>+91 8305104770</span>
            </div>

            <div className="flex gap-4 mt-4 text-xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/garvish-jain-a07a651b3/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Send Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded hover:bg-yellow-300 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm"> © {new Date().getFullYear()} Garvish Jain. All rights reserved.</div>
    </footer>
  );
}

export default Footer;