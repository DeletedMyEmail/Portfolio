import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faHome, faMessage, faDisplay } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

function SideButton(icon: IconDefinition) {
    return (
        <button className='w-full '>
            <FontAwesomeIcon icon={icon} className='w-full'/>
        </button>
    )
}

export default function SideBar() {
    return (
        <div className="sidebar">
            {SideButton(faSearch)}
            {SideButton(faFilter)}
            {SideButton(faMessage)}
            {SideButton(faDisplay)}
            {SideButton(faHome)}
        </div>
    )
}