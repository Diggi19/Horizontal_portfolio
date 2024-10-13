import React from 'react'
import './moreproject.css'
const MoreProjects = () => {
  return (
    <div className='moreproject-main-container'>
        <div className='moreproject-main-holder'>
            <h3>View Some More</h3>
            <p>Check out my GitHub page for more amazing projects.</p>
            <button>
                <a className='moreproject-link' href="https://github.com/DigveshParab" target='_blank'>Let's Go!</a>
            </button>        
        </div>
        <div className='moreproject-social-holder'>

        </div>
    </div>
  )
}

export default MoreProjects