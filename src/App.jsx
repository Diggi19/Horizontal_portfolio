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
// const horizontalScrollByDef = () => {
//   const container = scrollContainerRef.current;
//   let scrollTimeout;
//   let lastScrollTime = 0;
//   const scrollInterval = 20; // minimum time between scroll events
//   let isTrackpad = false;
//   let lastDeltaY = 0;

//   const detectTrackpad = (event) => {
//     // Check if the event is from a trackpad
//     if (event.wheelDeltaY) {
//       if (event.wheelDeltaY === (event.deltaY * -3)) {
//         isTrackpad = true;
//       }
//     } else if (event.deltaMode === 0) {
//       // Additional check for Firefox and other browsers
//       if (Math.abs(event.deltaY) < 50) {
//         isTrackpad = true;
//       }
//     }
//   };

//   const handleScroll = (event) => {
//     event.preventDefault();

//     const currentTime = new Date().getTime();
//     const timeSinceLastScroll = currentTime - lastScrollTime;

//     detectTrackpad(event);

//     // Determine the scroll amount based on the input type
//     let scrollAmount;
//     if (isTrackpad) {
//       // Trackpad scrolling
//       scrollAmount = event.deltaY * 100; // Reduced multiplier for trackpads
//     } else {
//       // Mouse wheel scrolling
//       scrollAmount = event.deltaY * 10;
//     }

//     // Smooth out sudden direction changes
//     if (Math.sign(scrollAmount) !== Math.sign(lastDeltaY)) {
//       scrollAmount = scrollAmount * 0.5;
//     }
//     lastDeltaY = scrollAmount;

//     // Apply a non-linear transformation to make small scrolls more precise
//     scrollAmount = Math.sign(scrollAmount) * Math.pow(Math.abs(scrollAmount), 1.3);

//     // Throttle the scroll events
//     if (timeSinceLastScroll > scrollInterval) {
//       container.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//       lastScrollTime = currentTime;
//     } else {
//       // If we're scrolling too fast, queue up a scroll for later
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         container.scrollBy({
//           left: scrollAmount,
//           behavior: 'smooth'
//         });
//         lastScrollTime = new Date().getTime();
//       }, scrollInterval - timeSinceLastScroll);
//     }
//   };

//   // Add wheel event listener
//   if (container) {
//     container.addEventListener('wheel', handleScroll, { passive: false });
//   }

//   // Cleanup the event listener on component unmount
//   return () => {
//     if (container) {
//       container.removeEventListener('wheel', handleScroll);
//       clearTimeout(scrollTimeout);
//     }
//   };
// };


  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isTrackpad = false;
    let lastScrollTop = 0;
    let lastScrollLeft = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      
      // Detect if the user is using a trackpad
      if (Math.abs(e.deltaY) < 0) {
        isTrackpad = true;
      }

      // Determine scroll direction and amount
      const scrollAmount = isTrackpad ? e.deltaY * 10 : e.deltaY * 5;
      
      if (isTrackpad) {
        // For trackpad: up gesture scrolls left, down gesture scrolls right
        container.scrollLeft -= scrollAmount;
      } else {
        // For mouse: scroll down to go left, scroll up to go right
        container.scrollLeft += scrollAmount;
      }
    };

    const handleTouchMove = (e) => {
      const touchDeltaX = lastScrollLeft - container.scrollLeft;
      lastScrollLeft = container.scrollLeft;

      // Smooth out the scrolling by applying a fraction of the movement
      container.scrollLeft += touchDeltaX * 0.1;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [showSplash,isExperiencePageOpen,isProjectPageOpen]);





// useEffect(() => {
//   horizontalScrollByDef();
// }, [isExperiencePageOpen,isProjectPageOpen,showSplash,showLoadingSplash]);

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

  const handleMoveToAbout = ()=>{
    scrollContainerRef.current.scrollTo({ left: 870, behavior: 'smooth' });
  }
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
      <Title startFunction={handleMoveToAbout}/>
      <About />
      <Experience setIsExperiencePageOpen={() => showSplashAndNavigateOpen(setIsExperiencePageOpen)} />
      <Projects setIsProjectPageOpen={() => showSplashAndNavigateOpen(setIsProjectPageOpen)} />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
