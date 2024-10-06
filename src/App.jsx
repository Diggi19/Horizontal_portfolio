import { useEffect, useRef, useState } from 'react'
import './App.css'
import Title from './components/title/Title'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  const [isLoadingScreenOn,setIsLoadingScreenOn] = useState(false)

  // handle horizontal scroll as default behaviour
  const scrollContainerRef = useRef(null);

  const horizontalScrollByDef = ()=>{
    const container = scrollContainerRef.current;

    // Scroll horizontally on wheel event
    const handleScroll = (event) => {
      event.preventDefault();
      container.scrollBy({
        left: event.deltaY * 10.5, // Apply vertical scroll to horizontal
        behavior: 'smooth'  // Enable smooth scrolling
      });
    };

    // Add wheel event listener
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }






  useEffect(()=>{
    horizontalScrollByDef()
  },[])

  return (
    <div className='app-main-container' ref={scrollContainerRef}> 
      <Title/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
