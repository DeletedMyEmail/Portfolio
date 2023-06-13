import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

function SideButton(icon: IconProp) {
    return (
        <button className='w-full '>
            <FontAwesomeIcon icon={icon} className='w-full'/>
        </button>
    )
}

export default function SideBar({icons}: {icons: IconProp[]}) {
    return (
        <div className="sidebar">
            {icons.map((icon) => SideButton(icon))}
        </div>
    )
}