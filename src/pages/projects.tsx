import SideBar from "@/components/Sidebar";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { faCodeBranch, faCode, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router';
import Image from "next/image";

export default function Home() {
  return (
    <div id="projects-page" className="w-full h-screen text-center flex bg-primary">
      <div className="rounded-2xl pt-14 w-9/12 aspect-16-9 m-auto bg-opacity-95 bg-white">
        <SideBar elements={[ 
          {icon: faCode, clickEvent: () => {} },
          {icon: faCodeBranch, clickEvent: () => {Router.push("/projects")} },
          {icon: faMessage, clickEvent: () => {Router.push("/contact")} },
          {icon: faHome, clickEvent: () => {Router.push("/")} },
        ]}/>
        
        <Projects/>
        <Intro name="" title="Experience and Projects" description={["Tempor deserunt commodo nostrud dolor est minim ex occaecat culpa consequat ullamco eu. Cupidatat adipisicing ea nulla laboris Lorem anim Lorem culpa in consectetur ea ipsum. Amet enim enim ut excepteur sit nisi in esse aute laboris culpa. Nostrud ea est ad voluptate Lorem dolore labore duis. Ullamco officia adipisicing nulla irure.","Ad cupidatat duis do sit aute aliquip magna non incididunt Lorem ea commodo esse. Veniam ex ullamco sit ea esse. Esse cupidatat sint fugiat incididunt laboris eiusmod aute occaecat sunt. Aliqua aute Lorem elit magna nisi laborum exercitation."]}/>
        <img className="mx-auto mt-16 p-2 border-tertiary border-4 rounded-xl" alt="" src="https://skillicons.dev/icons?i=java,cpp,kotlin,py,bash,css,html,js,github,git,linux,maven,mysql,react,tailwind"/>
      </div>
    </div>
  )
}
