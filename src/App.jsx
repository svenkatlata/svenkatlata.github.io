import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTopButton from "./components/UI/ScrollToTopButton"

const App = () => {
  return (
    <div className="antialiased selection:bg-theme-dark-blue selection:text-theme-yellow">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Education />
      <Projects />
      <Contact /> 
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default App