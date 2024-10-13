import React, { useEffect } from 'react'
import './projectintro.css'
const ProjectIntro = (
    {
        setIsProjectPageOpen,
    }
) => {


    const handleCloseProjectPage = () => setIsProjectPageOpen(false)
      
  return (
    <div className='projectintro-main-container'>
        <div className='projectintro-content-holder'>
          <div className='projectintro-intro-text'>
            <h3>My Proud Creations</h3>
            <p onClick={handleCloseProjectPage}>Go Back</p>
            <div className='projectintro-link-underline'></div>
          </div>
          <div className='projectintro-general-image'>
          </div>

        </div>
    </div>
  )
}

export default ProjectIntro