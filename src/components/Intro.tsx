import React from 'react'

function Intro(props: {name: string, title: string, description: string[]}) {

    return (
        <div className="Intro pt-12 w-4/5 text-center md:w-2/5 m-auto text-white">
            <div className="">
                <h1 className="text-7xl font-bold text-center mt-0 mb-2">{props.name}</h1>
                <h2 className="text-base font-bold text-center text-gray-500 mb-4">{props.title}</h2>
            </div>
            {props.description.map((paragraph) => {
                return <p className="text-base txt-tertiary font-normal m-4">{paragraph}</p>
            })}
        </div>
    )
}

export default Intro