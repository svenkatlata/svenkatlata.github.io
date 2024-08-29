import React from 'react'
import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <div id="education" className="p-8 lg:px-20 lg:pt-4 lg:pb-28 text-theme-dark-blue">
        <h2 className="mt-8 mb-20 text-center lg:text-4xl text-3xl font-light">
            Education
        </h2>
        {EDUCATION.map((education, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4 flex lg:justify-center">
                    <img src={education.logo} alt={education.institute} className="mb-6 rounded h-20" />
                </div>
                <div className="w-full lg:w-3/4 max-w-xl">
                    <h6 className="mb-2 text-lg font-semibold">{education.institute}</h6>
                    <p className="mb-2 font-light">{education.degree}</p>
                    <p className="mb-4 font-light">Batch of {education.year}</p>
                    <div className="flex flex-wrap gap-2">
                        {education.technologies.map((tech, index) => (
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

export default Education