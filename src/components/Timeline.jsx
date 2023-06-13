import React from 'react'
import entries from '../data/timeline_entries'

function create_entry(date, description) {

    return (
        <div className="container right txt-tertiary" key={date}>
            <div className="content bg-primary rounded-lg border-tertiary p-1 border-solid border-2">
                <h2 className='rounded-lg border-tertiary p-1 border-solid border-2 w-fit'>{date}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

function Timeline() {
    return (
        <div className="Timeline m-auto ">
            {entries.map(function(entry) {
                console.log(entry)
                return create_entry(entry.date, entry.description)
            })}
        </div>
    )
}

export default Timeline