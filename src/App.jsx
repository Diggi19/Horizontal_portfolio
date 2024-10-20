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

import gecisImg from './assets/projects/gecis.png';
import netflixImg from './assets/projects/netflix.png';
import whatsappImg from './assets/projects/whatsapp.png';
import ExperienceIntro from './components/experience/ExperienceIntro';
import ExperienceTimeline from './components/experience/ExperienceMap';
import ResumeSection from './components/experience/ResumeSection';
import SplashScreen from './pages/SplashScreen';
import LoadingSplash from './pages/LoadingSplash';

const App = () => {
  const [showSplash, setShowSplash] = useState(true); // To control splash visibility
  const [showLoadingSplash, setLoadingShowSplash] = useState(false); // To control splash visibility
  const [isProjectPageOpen, setIsProjectPageOpen] = useState(false);
  const [isExperiencePageOpen, setIsExperiencePageOpen] = useState(false);
  
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
}, [isExperiencePageOpen,isProjectPageOpen]);

  // Show splash screen on page load and hide after animation
  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleLoadingSplashFinish = () => {
    setLoadingShowSplash(false);
  };

  // Trigger the splash screen when navigating to a new page
  const showSplashAndNavigateOpen = (pageSetter) => {
    setLoadingShowSplash(true);
    setTimeout(() => {
      pageSetter(true);
      setLoadingShowSplash(false);
    }, 3000); // Show the splash for 3 seconds
  };

  const showSplashAndNavigateClose = (pageSetter) => {
    setLoadingShowSplash(true);
    setTimeout(() => {
      pageSetter(false);
      setLoadingShowSplash(false);
    }, 3000); // Show the splash for 3 seconds
  };

  
  useEffect(() => {
    if (showSplash) {
      setTimeout(() => setShowSplash(false), 12000); // Hide splash after 3 seconds
    }
  }, [showSplash]);

  useEffect(() => {
    if (scrollContainerRef.current && (isProjectPageOpen || isExperiencePageOpen)) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [isProjectPageOpen, isExperiencePageOpen]);

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }
  if(showLoadingSplash){
    return <LoadingSplash onFinish={handleLoadingSplashFinish}/>
  }

  if (isExperiencePageOpen) {
    return (
      <div className="app-main-container" ref={scrollContainerRef}>
        <ExperienceIntro setIsExperiencePageOpen={() => showSplashAndNavigateClose(setIsExperiencePageOpen)} />
        <ExperienceTimeline />
        <ResumeSection />
      </div>
    );
  }

  if (isProjectPageOpen) {
    return (
      <div className="app-main-container" ref={scrollContainerRef}>
        <ProjectIntro setIsProjectPageOpen={() => showSplashAndNavigateClose(setIsProjectPageOpen)} />
        <SingleProject number={1} name="GEC-MIS" title="Academic Management System" imageURL={gecisImg} />
        <SingleProject number={2} name="NETFLIX CLONE" title="Streaming Service Replica" imageURL={netflixImg} />
        <SingleProject number={3} name="WHATSAPP CLONE" title="Messaging Application" imageURL={whatsappImg} />
        <MoreProjects />
      </div>
    );
  }

  return (
    <div className="app-main-container" ref={scrollContainerRef}>
      <Title />
      <About />
      <Experience setIsExperiencePageOpen={() => showSplashAndNavigateOpen(setIsExperiencePageOpen)} />
      <Projects setIsProjectPageOpen={() => showSplashAndNavigateOpen(setIsProjectPageOpen)} />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
