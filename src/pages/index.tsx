import SideBar from "@/components/Sidebar";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main id="main-page" className="w-full h-screen bg-white p-4 bg-light-white">
      <Intro name="Joshua" job="Software Engineer && Part Time Web Developer" introDescription=""/>
      <SideBar/>
    </main>
  )
}
