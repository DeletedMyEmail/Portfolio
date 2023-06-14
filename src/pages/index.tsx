import SideBar from "@/components/Sidebar";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { faCodeBranch, faCode, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div id="main-page" className="w-full h-screen bg-primary">
      <SideBar icons={[faCode, faCodeBranch, faMessage, faHome]}/>
      
      <div id="top" className="">
        <Intro name="Joshua" job="Software Engineer && Part Time Web Developer" introDescription=""/>
      </div>

      <div id="middle" className="py-32 flex flex-col space-y-24">
        <Projects/>
        <Timeline/>
      </div>
      
      <Footer/>
    </div>
  )
}
