import React from 'react'
import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div id="experience" className="p-8 xl:px-20 xl:pt-0 xl:pb-16 text-theme-dark-blue">
        <h2 className="my-20 text-center lg:text-4xl text-3xl font-light">
            Experience
        </h2>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4 flex lg:justify-center">
                    <p className="mb-2 text-sm font-light">
                        {experience.year}
                    </p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {experience.role} -
                        <span className="text-sm text-blue-800">
                            &nbsp;{experience.company}
                        </span>
                    </h6>
                    <p className="mb-4 text-sm font-light">
                        {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="rounded shadow-md p-2 text-xs">
                                {tech}&nbsp;
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Experience