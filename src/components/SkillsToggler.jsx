import React from 'react'
import Skills from './Skills'

function SkillsToggler() {
    const [show, setShow] = React.useState(false);

    return (
        <div className="SkillsIcon w-1/4 h-fit ml-auto">
            <i className="fa-regular fa-2x fa-star float-right p-5 inline" onClick={() => setShow(currentShow => !currentShow)}/>
            { show ? <Skills/> : null }
        </div>
    )
}

export default SkillsToggler