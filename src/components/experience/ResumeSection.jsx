import React from 'react'
import './resumesection.css'
const ResumeSection = () => {

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/Digvesh-Parab-resume.pdf'; // Direct path to the resume file in the public folder
      link.download = 'Digvesh_Resume.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  

  
  return (
    <div className='resumesection-main-container'>
        <div className='resumesection-main-holder'>
            <h3>Resume</h3>
            <p>Excited to learn more? Click the button below to grab my resume!</p>
            <button onClick={handleDownload}>
                Download
            </button>        
        </div>
        <div className='resumesection-social-holder'>

        </div>
    </div>
  )
}

export default ResumeSection