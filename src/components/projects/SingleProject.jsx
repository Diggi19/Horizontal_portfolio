import React, { useState } from 'react';
import './singleproject.css';
const SingleProject = ({ number, name, title, imageURL }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="singleproject-main-container">
      <div 
        className={`singleproject ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="singleproject-content-container">
          <p className="singleproject-number">{number}</p>
          <h2 className="singleproject-name">{name}</h2>
            <p className={`singleproject-details ${isHovered ? 'visible' : ''} singleproject-title`}>{title}</p>
        </div>
        <div className="singleproject-background">
          <img src={imageURL} className='singleproject-image'/>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
