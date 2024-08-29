import React from 'react'
import {PROJECTS} from '../constants'

const Projects = () => {
  return (
    <div id="projects" className="p-8 xl:px-20 text-theme-dark-blue">
        <h2 className="my-20 text-center lg:text-4xl text-3xl font-light">
            <span>Projects</span>
        </h2>
        {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4 flex lg:justify-center">
                    <img src={project.image} alt={project.title} className="mb-6 rounded w-40 h-40" />
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {project.title}
                    </h6>
                    <p className="mb-4 text-sm font-light">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
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

export default Projects