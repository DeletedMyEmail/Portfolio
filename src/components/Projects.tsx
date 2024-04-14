import React from 'react'
import ProjectItem from "./ProjectItem";
import projects from '../data/projects.js'

function Projects() {
    return (
        <div className="Projects txt-tertiary flex 2xl:space-x-8 2xl:space-y-0 space-y-8 flex-col 2xl:flex-row justify-center items-center align-center m-auto ">
            {projects.map(function (project) {
                return <ProjectItem title={project.title} image={project.image} url={project.repo_url} tags={project.tags}/>
            })}
        </div>
    )
}

export default Projects