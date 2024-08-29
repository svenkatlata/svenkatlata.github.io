import React from 'react'
import {HERO_CONTENT} from '../constants'
import intro from '../assets/intro.png'

const Hero = () => {
  return (
    <div id="hero" className="pb-8 lg:mb-35 pt-44 lg:px-20 lg:pb-28 px-8">
        <div className="flex flex-wrap overflow-x-hidden">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start text-theme-dark-blue">
                    <h1 className="pb-14 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Venkat Lata</h1>
                    <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 bg-clip-text text-2xl tracking-tight text-transparent">MACHINE LEARNING ENGINEER, <br />FULL STACK PYTHON DEVELOPER</span>
                    <p className="my-2 max-w-xl py-6 font-light">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 lg:px-10 lg:pb-10">
                <div className="flex justify-center">
                    <img src={intro} alt="Venkat Lata" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero