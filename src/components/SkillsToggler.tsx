import React from 'react'
import Skills from './Skills'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SkillsToggler() {
    const [show, setShow] = React.useState(false);

    return (
        <button className='w-full' onClick={() => setShow(currentShow => !currentShow)}>
            <FontAwesomeIcon icon={faCode} className='w-full'/>
        </button>
    )
}

export default SkillsToggler