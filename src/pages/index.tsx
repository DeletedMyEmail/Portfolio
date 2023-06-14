import SideBar from "@/components/Sidebar";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { faCodeBranch, faCode, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router';

export default function Home() {
  return (
    <div id="main-page" className="w-full h-screen bg-primary">
      <SideBar elements={[ 
        {icon: faCode, clickEvent: () => {} },
        {icon: faCodeBranch, clickEvent: () => {Router.push("/projects")} },
        {icon: faMessage, clickEvent: () => {Router.push("/contact")} },
        {icon: faHome, clickEvent: () => {Router.push("/")} },
       ]}/>
      
      <div id="top" className="">
        <Intro name="Joshua" title="Software Engineer && Part Time Web Developer" description=""/>
      </div>

      <div id="middle" className="py-32 flex flex-col space-y-24">
        <Projects/>
        <Timeline/>
      </div>
      
      <Footer/>
    </div>
  )
}
