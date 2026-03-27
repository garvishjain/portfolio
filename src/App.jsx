import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/ContactUsComponent'
import Skills from './components/SkillsComponent'
import Projects from './components/ProjectComponent'
import Experience from './components/ExperienceComponent'
import AboutUs from './components/AboutUsComponent'
import { Routes, Route } from "react-router-dom";
// import Skillsdummy from './components/skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Footer />} />
      </Routes> */}
      {/* <Skillsdummy /> */}
      <AboutUs />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App
