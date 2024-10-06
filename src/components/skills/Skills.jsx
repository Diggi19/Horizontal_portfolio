import React from 'react'
import './skills.css'
import htmlImg from '../../assets/html.svg'
import cssImg from '../../assets/css.svg'
import javascriptImg from '../../assets/javascript.svg'
import reactImg from '../../assets/react.svg'
import pythonImg from '../../assets/python.svg'
import djangoImg from '../../assets/django.svg'
import mongoImg from '../../assets/mongo.svg'
import nodeImg from '../../assets/node.svg'
import awsImg from '../../assets/aws.svg'
import firebaseImg from '../../assets/firebase.svg'
import mysqlImg from '../../assets/mysql.svg'
import pgadminImg from '../../assets/pgadmin.svg'
import xdImg from '../../assets/xd.svg'
import figmaImg from '../../assets/figma.svg'


const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlImg, alt: "HTML Logo" },
    { name: "CSS", logo: cssImg, alt: "CSS Logo" },
    { name: "JavaScript", logo:javascriptImg, alt: "JavaScript Logo" },
    { name: "React", logo: reactImg, alt: "React Logo" },
    { name: "Node.js", logo: nodeImg, alt: "Node.js Logo" },
    { name: "MongoDB", logo: mongoImg, alt: "MongoDB Logo" },
    { name: "Django", logo: djangoImg, alt: "Django Logo" },
    { name: "Python", logo: pythonImg, alt: "Python Logo" },
    { name: "PostgreSQL", logo: pgadminImg, alt: "PostgreSQL Logo" },
    { name: "MySQL", logo: mysqlImg, alt: "MySQL Logo" },
    { name: "Adobe XD", logo: xdImg, alt: "Adobe XD Logo" },
    { name: "Figma", logo:figmaImg, alt: "Figma Logo" },
    { name: "AWS", logo: awsImg, alt: "AWS Logo" },
    { name: "Firebase", logo: firebaseImg, alt: "Firebase Logo" },
  ];
  
  return (
    <div className='skills-main-container'>
        <div className='skill-content-holder'>
          <div className='skill-intro-text'>
            <h3>My Arsenal</h3>
            <p>
              I have an arsenal loaded with skills across various fields, 
              including web development, frontend engineering, UI/UX design, 
              and database management. Each skill enables me to craft efficient,
              user-friendly, and scalable solutions that bring ideas to life and tackle real-world challenges.</p>
          </div>
          <div className='skill-list-holder'>
            {skills.map(skill => (
              <img 
                key={skill.name} 
                src={skill.logo} 
                alt={skill.alt} 
                className="skill-icon" 
             />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills