import React from 'react'

function Intro({name, job, introDescription}) {

    return (
        <div className="Intro pt-12 w-4/5 text-center md:w-2/5 m-auto text-white">
            <div className="">
                <h1 className="text-7xl font-bold text-center mt-0 mb-2">{name}</h1>
                <h2 className="text-base font-bold text-center text-gray-500 mb-4">{job}</h2>
            </div>
            <p className="text-base font-normal">{introDescription}</p>
        </div>
    )
}

export default Intro