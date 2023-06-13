import React from 'react'
import ProjectItem from "./ProjectItem";
import projects from '../data/projects.js'

function Projects() {

    return (
        <div className="Projects flex lg:space-x-10 lg:space-y-0 space-y-10 lg:flex-row flex-col justify-center align-center w-3/5">
            {projects.map(function (project) {
                return <ProjectItem title={project.title} image={project.image} url={project.repo_url} tags={project.tags}/>
            })}
        </div>
    )
}

export default Projects