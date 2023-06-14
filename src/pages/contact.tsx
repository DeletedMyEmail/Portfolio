import SideBar from "@/components/Sidebar";
import { faCodeBranch, faCode, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router';

export default function Home() {
  return (
    <div id="main-page" className="w-full h-screen bg-primary">
      <SideBar elements={[ 
        {icon: faCode, clickEvent: () => {} },
        {icon: faCodeBranch, clickEvent: () => {} },
        {icon: faMessage, clickEvent: () => {} },
        {icon: faHome, clickEvent: () => {Router.push("/")} },
       ]}/>
    </div>
  )
}
