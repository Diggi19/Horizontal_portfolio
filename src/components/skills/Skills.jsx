import React from 'react';
import './skills.css';
import htmlImg from '../../assets/html.svg';
import cssImg from '../../assets/css.svg';
import javascriptImg from '../../assets/javascript.svg';
import reactImg from '../../assets/react.svg';
import pythonImg from '../../assets/python.svg';
import djangoImg from '../../assets/django.svg';
import mongoImg from '../../assets/mongo.svg';
import nodeImg from '../../assets/node.svg';
import awsImg from '../../assets/aws.svg';
import firebaseImg from '../../assets/firebase.svg';
import mysqlImg from '../../assets/mysql.svg';
import pgadminImg from '../../assets/pgadmin.svg';
import xdImg from '../../assets/xd.svg';
import figmaImg from '../../assets/figma.svg';
import javaImg from '../../assets/java.svg';
import jenkinsImg from '../../assets/jenkins.svg';
import githubImg from '../../assets/github.svg';
import dockerImg from '../../assets/docker.svg';
import expressImg from '../../assets/express.svg';
import cppImg from '../../assets/cpp.svg';
import slackImg from '../../assets/slack.svg'
import clockifyImg from '../../assets/clockify.svg'
import jiraImg from '../../assets/jira.svg'
import confluImg from '../../assets/conflu.svg'
const Skills = () => {
  const skills = [
    // Silver dot separator (dummy data for frontend)
    { separator: true ,title:"FRONTEND"},

    // Frontend skills
    { name: 'HTML', logo: htmlImg, alt: 'HTML Logo' },
    { name: 'CSS', logo: cssImg, alt: 'CSS Logo' },
    { name: 'JavaScript', logo: javascriptImg, alt: 'JavaScript Logo' },
    { name: 'React', logo: reactImg, alt: 'React Logo' },
    { name: 'Adobe XD', logo: xdImg, alt: 'Adobe XD Logo' },
    { name: 'Figma', logo: figmaImg, alt: 'Figma Logo' },
    
    // Silver dot separator (dummy data for frontend)
    { separator: true ,title:"BACKEND"},

    // Backend skills
    { name: 'Node.js', logo: nodeImg, alt: 'Node.js Logo' },
    { name: 'Express', logo: expressImg, alt: 'Express Logo' },
    { name: 'Django', logo: djangoImg, alt: 'Django Logo' },
    { name: 'Python', logo: pythonImg, alt: 'Python Logo' },
    { name: 'C++', logo: cppImg, alt: 'C++ Logo' },
    { name: 'Java', logo: javaImg, alt: 'Java Logo' },

    // Silver dot separator (dummy data for backend)
    { separator: true ,title:"DATABASE"},

    // Database skills
    { name: 'MongoDB', logo: mongoImg, alt: 'MongoDB Logo' },
    { name: 'PostgreSQL', logo: pgadminImg, alt: 'PostgreSQL Logo' },
    { name: 'MySQL', logo: mysqlImg, alt: 'MySQL Logo' },

    // Silver dot separator (dummy data for database)
    { separator: true ,title:"DEVOPS"},

    // DevOps skills
    { name: 'GitHub', logo: githubImg, alt: 'GitHub Logo' },
    { name: 'Docker', logo: dockerImg, alt: 'Docker Logo' },
    { name: 'Jenkins', logo: jenkinsImg, alt: 'Jenkins Logo' },
    { name: 'AWS', logo: awsImg, alt: 'AWS Logo' },
    { name: 'Firebase', logo: firebaseImg, alt: 'Firebase Logo' },

    // Silver dot separator (dummy data for project management)
    { separator: true ,title:"MANAGE"},
    { name: 'Jira', logo: jiraImg, alt: 'Jira Logo' },
    { name: 'Clockify', logo: clockifyImg, alt: 'Clockify Logo' },
    { name: 'Slack', logo: slackImg, alt: 'Slack Logo' },

  ];

  return (
    <div className='skills-main-container'>
      <div className='skill-content-holder'>
        <div className='skill-intro-text'>
          <h3>My Arsenal</h3>
          <p>
            I have an arsenal loaded with skills across various fields, including web development, frontend engineering, UI/UX design, and database management. Each skill enables me to craft efficient, user-friendly, and scalable solutions that bring ideas to life and tackle real-world challenges.
          </p>
        </div>
        <div className='skill-list-holder'>
          {skills.map((skill, index) => (
            skill.separator ? (
              <div key={`separator-${index}`} className="skill-separator">
                <span className="silver-dot">{skill.title}</span>
              </div>
            ) : (
              <img
                key={skill.name}
                src={skill.logo}
                alt={skill.alt}
                className="skill-icon"
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
