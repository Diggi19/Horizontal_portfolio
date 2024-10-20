import React from 'react'
import './experienceintro.css'
const ExperienceIntro = (
  {
    setIsExperiencePageOpen
  }
) => {

  const handleCloseExpeirencePage = ()=> setIsExperiencePageOpen(false)

  return (
    <div className='experience-main-container'>
        <div className='experience-content-holder'>
          <div className='experience-intro-text'>
            <h3>It Has Only Started</h3>
            <p onClick={handleCloseExpeirencePage}>Go Back</p>
            <div className='experience-link-underline'></div>
          </div>
          <div className='experience-general-image'>
          </div>

        </div>
    </div>
  )
}

export default ExperienceIntro