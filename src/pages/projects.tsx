import SideBar from "@/components/Sidebar";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { faCodeBranch, faCode, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router';

export default function Home() {
  return (
    <div id="main-page" className="w-full h-screen pt-20 bg-primary">
      <SideBar elements={[ 
        {icon: faCode, clickEvent: () => {} },
        {icon: faCodeBranch, clickEvent: () => {Router.push("/projects")} },
        {icon: faMessage, clickEvent: () => {Router.push("/contact")} },
        {icon: faHome, clickEvent: () => {Router.push("/")} },
       ]}/>
      
      <Projects/>
      <Intro name="" title="Experience and Projects" description="Anim laboris veniam incididunt sunt esse nulla dolor ea culpa ipsum reprehenderit exercitation sit. Incididunt elit aliqua id sunt nulla pariatur. Excepteur sit amet do enim aliquip sit esse commodo officia esse irure eu non laboris. Excepteur exercitation officia enim minim proident id laboris. Incididunt irure qui Lorem exercitation anim commodo nostrud fugiat eu pariatur incididunt esse amet ullamco. Proident fugiat do adipisicing ad cupidatat voluptate excepteur cillum proident qui est reprehenderit consectetur. Lorem ex consequat cupidatat qui ea laborum id."/>
    </div>
  )
}
