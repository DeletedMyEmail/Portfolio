import React from 'react'
import entries from '../data/timeline_entries'

function create_entry(date: Number, description: String) {

    return (
        <div className="container right txt-tertiary">
            <div className="content bg-primary rounded-lg border-tertiary border-solid border-2">
                <h2 className='rounded-lg border-tertiary p-1 border-solid border-2 w-fit'>{date.toString()}</h2>
                <p className='text-left pt-2'>{description}</p>
            </div>
        </div>
    )
}

function Timeline() {
    return (
        <div className="Timeline m-auto ">
            {entries.map(function(entry) {
                return create_entry(entry.date, entry.description)
            })}
        </div>
    )
}

export default Timeline