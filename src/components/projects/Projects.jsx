import React from 'react'
import './project.css'
const Projects = (
  {
    setIsProjectPageOpen
  }
) => {

  const handleOpenProjectPage = () => setIsProjectPageOpen(true)



  return (
    <div className='project-main-container'>
        <div className='project-content-holder'>
          <div className='project-intro-text'>
            <h3>Check Out My Projects</h3>
            <p onClick={handleOpenProjectPage}>View Projects</p>
            <div className='project-link-underline'></div>
          </div>
          <div className='project-general-image'>
          </div>

        </div>
    </div>
  )
}

export default Projects