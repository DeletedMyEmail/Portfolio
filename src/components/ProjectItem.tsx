import React from 'react'

function create_tag(name) {
    return (
        <h2 className="rounded-lg border-tertiary p-1 txt-tertiary border-solid border-2 text-sm">{name}</h2>
    )
}

function ProjectItem({title, image, url, tags}) {
    
    return (
            <a className="ProjectItem relative w-60 h-60 square rounded-lg outline-tertiary p-1 outline outline-offset-4 overflow-clip hover:outline-offset-8"
               href={url}
               target="_blank"
            >
                <img className="rounded-lg h-2/3 object-contain object-center m-auto" src={image} alt="project preview"/>
                <div className="border-double border-t-4 border-tertiary bg-transparent h-1/3 w-full left-0">
                    <h1 className="text-xl font-bold py-1.5">{title}</h1>
                    <div className="flex flex-auto space-x-2 mb-2">
                        {tags.map(function(name) {
                            return create_tag(name)
                        })}
                    </div>
                </div>
            </a>
    )
}

export default ProjectItem