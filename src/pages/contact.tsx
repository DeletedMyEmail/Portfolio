import SideBar from "@/components/Sidebar";
import ContactCard from "@/components/ContactCard";
import { faCodeBranch, faCode, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router';

export default function Home() {
  return (
    <div id="main-page" className="w-full h-screen bg-primary contacts ">
      <SideBar elements={[ 
        {icon: faHome, clickEvent: () => {Router.push("/")} },
        {icon: faCodeBranch, clickEvent: () => {Router.push("/projects")} },
        {icon: faCode, clickEvent: () => {Router.push("/idk")} },
        {icon: faMessage, clickEvent: () => {Router.push("/contact")} }
       ]}/>

        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 h-full flex items-center justify-center">
            <ContactCard type={'dark'}/>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <ContactCard type={'light'}/>
          </div>
        </div>
    </div>
  )
}
