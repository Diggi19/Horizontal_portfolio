import { useEffect, useRef, useState } from 'react';
import './App.css';
import Title from './components/title/Title';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ProjectIntro from './components/projects/ProjectIntro';
import SingleProject from './components/projects/SingleProject';
import MoreProjects from './components/projects/MoreProjects';

// images
import gecisImg from './assets/projects/gecis.png';
import netflixImg from './assets/projects/netflix.png';
import whatsappImg from './assets/projects/whatsapp.png';

const projectData = [
  {
    name: "GEC-MIS",
    number: "1.",
    title: "Academic Management System",
    description: "A comprehensive system for managing academic tasks in colleges, from admission to graduation.",
  },
  {
    name: "NETFLIX CLONE",
    number: "2.",
    title: "Streaming Service Replica",
    description: "A clone of Netflix, featuring movie and show streaming functionalities.",
  },
  {
    name: "WHATSAPP CLONE",
    number: "3.",
    title: "Messaging Application",
    description: "A clone of WhatsApp, allowing users to send messages and make calls.",
  },
  {
    name: "PLACEMENT MODULE",
    number: "4.",
    title: "Placement Management System",
    description: "A module for managing student placements and company interactions.",
  },
  {
    name: "AUROMATE FORM FILLING",
    number: "5.",
    title: "Automated Form Submission Tool",
    description: "A tool that automates the filling of forms across various platforms.",
  },
];

function App() {
  const [isLoadingScreenOn, setIsLoadingScreenOn] = useState(false);
  const [isProjectPageOpen, setIsProjectPageOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  // Handle horizontal scroll as default behaviour
  const horizontalScrollByDef = () => {
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

  useEffect(() => {
    horizontalScrollByDef();
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current && isProjectPageOpen) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' }); // Reset horizontal scroll
    }
  }, [isProjectPageOpen]);
  

  if (isProjectPageOpen) {
    return (
      <div className='app-main-container' ref={scrollContainerRef}>
        <ProjectIntro setIsProjectPageOpen={setIsProjectPageOpen} />
        <SingleProject number={1} name={"GEC-MIS"} title={"Academic Management System"} imageURL={gecisImg} />
        <SingleProject number={2} name={"NETFLIX CLONE"} title={"Streaming Service Replica"} imageURL={netflixImg} />
        <SingleProject number={3} name={"WHATSAPP CLONE"} title={"Messaging Application"} imageURL={whatsappImg} />
        <MoreProjects />
      </div>
    );
  }

  return (
    <div className='app-main-container' ref={scrollContainerRef}>
      <Title />
      <About />
      <Experience />
      <Projects setIsProjectPageOpen={setIsProjectPageOpen} />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;











