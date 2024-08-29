import React from 'react'
import about from "../assets/about.png"
import { ABOUT_TEXT} from "../constants"

const About = () => {
  return (
    <div id="about" className="p-8 xl:px-20 xl:pt-0 xl:pb-16">
        <h2 className="my-20 text-center lg:text-4xl text-3xl font-light">
            <span className="text-theme-dark-blue">About</span>
            <span className="text-cyan-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 lg:p-10">
                <div className="flex items-center justify-center">
                    <img src={about} alt="About" />
                </div>
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 font-light">
                        {ABOUT_TEXT.map((paragraph, index) => (
                            <React.Fragment key={index}>
                                {paragraph}
                                <br /><br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About