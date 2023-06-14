import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import SkillsToggler from './SkillsToggler'

function SideButton(icon: IconProp, clickEvent: () => void) {
    return (
        <button className='w-full' onClick={clickEvent}>
            <FontAwesomeIcon icon={icon} className='w-full'/>
        </button>
    )
}

export interface SideBarElement {
    icon: IconProp,
    clickEvent: () => void
}

export default function SideBar({elements}: {elements: SideBarElement[]}) {
    return (
        <div className="sidebar">
            {elements.map((element) => SideButton(element.icon, element.clickEvent))}
        </div>
    )
}