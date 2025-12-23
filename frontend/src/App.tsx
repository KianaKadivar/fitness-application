import { useEffect, useState } from 'react'
import Navbar from './Scenes/Navbar'
import { SelectedPage } from './Shared/types'
import Home from './Scenes/Home'
import Benefits from './Scenes/Benefits'
import OurClasses from './Scenes/OurClasses'
import ContactUs from './Scenes/ContactUs'
export default function App() {
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopOfPage]=useState<boolean>(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.screenY===0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY!==0)setIsTopOfPage(false)
    }
  window.addEventListener("scroll",handleScroll)
  return ()=>window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className='app bg-gray-20'>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  )
}
