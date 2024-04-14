import SideBar from "@/components/Sidebar";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import { faCodeBranch, faCode, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router';

export default function Home() {
  return (
    <div id="main-page" className="w-full h-screen bg-primary">
      <SideBar elements={[ 
        {icon: faHome, clickEvent: () => {Router.push("/")} },
        {icon: faCodeBranch, clickEvent: () => {Router.push("/projects")} },
        {icon: faCode, clickEvent: () => {Router.push("/idk")} },
        {icon: faMessage, clickEvent: () => {Router.push("/contact")} }
       ]}/>
      
      <div id="top" className="">
        <Intro name="Joshua" title="Software Engineer && Part Time Web Developer" description={[]}/>
      </div>

      <div id="middle" className="py-20 flex flex-col space-y-24">
        <Intro name="" title="About Me" description={["Tempor deserunt commodo nostrud dolor est minim ex occaecat culpa consequat ullamco eu. Cupidatat adipisicing ea nulla laboris Lorem anim Lorem culpa in consectetur ea ipsum. Amet enim enim ut excepteur sit nisi in esse aute laboris culpa. Nostrud ea est ad voluptate Lorem dolore labore duis. Ullamco officia adipisicing nulla irure.","Ad cupidatat duis do sit aute aliquip magna non incididunt Lorem ea commodo esse. Veniam ex ullamco sit ea esse. Esse cupidatat sint fugiat incididunt laboris eiusmod aute occaecat sunt. Aliqua aute Lorem elit magna nisi laborum exercitation."]}/>
        <Timeline/>
      </div>
    </div>
  )
}
