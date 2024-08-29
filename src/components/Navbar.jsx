import React, {useState} from 'react';
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiTableau } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import {SOCIAL_LINKS} from "../constants";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navItems = ["About", "Technologies", "Experience", "Education", "Projects", "Contact"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full mb-20 flex justify-between items-center bg-theme-dark-blue shadow-md">
      <div className="xl:px-20 px-8 py-6 w-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center lg:w-1/4 lg:justify-start">
            <Link key="hero" to="hero" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer"><img src={logo} alt="LOGO" className="w-10 h-10 mx-2" /></Link>
        </div>
        {/* Primary Menu Section */}
        <div className="text-white hidden lg:flex lg:w-1/2 lg:justify-between">
          {navItems.map((item) => (
            <Link 
              key={item} 
              to={item.toLowerCase()}
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="px-4 hover:underline hover:underline-offset-8 hover:decoration-theme-yellow hover:decoration-2 focus:underline focus:underline-offset-8 focus:decoration-theme-yellow focus:decoration-2 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
        {/* Social-links Section */}
        <div className="flex items-center justify-center gap-4 text-2xl text-white lg:w-1/4 lg:justify-end">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={SOCIAL_LINKS.tableau} target="_blank" rel="noopener noreferrer"><SiTableau /></a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={toggleDropdown}>
              <FaBars />
            </div>
        </div>
      </div>  
      {/* Dropdown Menu for small devices */}
      {isDropdownOpen && (
        <div className="fixed top-20 right-0 w-full h-screen bg-theme-dark-blue text-white lg:hidden transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'translate-x-0' : 'translate-x-full'}`}">
          <div className="flex flex-col items-center py-6">
            {navItems.map((item) => (
              <Link 
                key={item}  
                to={item.toLowerCase()}
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                onClick={toggleDropdown}
                className="py-4 px-8 text-xl hover:underline hover:underline-offset-8 hover:decoration-theme-yellow hover:decoration-2 focus:underline focus:underline-offset-8 focus:decoration-theme-yellow focus:decoration-2 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}  
    </nav>
  )
}

export default Navbar