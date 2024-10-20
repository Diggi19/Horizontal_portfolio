import React, { useState } from 'react';
import './experiencemap.css';
import { ChevronRight } from 'lucide-react';
const experiences = [
  {
    id: 1,
    date: 'July 2019 - August 2023',
    name: 'Goa College of Engineering',
    description: "Completed a Bachelor's degree in Electronics and Telecommunication with a GPA of 8.6.",
    tabs: [
      {
        name: 'Degree',
        content: "Completed a Bachelor's degree in Electronics and Telecommunication with a GPA of 8.6.",
      },
      {
        name: 'Internship',
        content: 'Software Developer Intern at a startup for 3 months during the 7th semester, gaining hands-on experience in software development.',
      },
      {
        name: 'Part Time',
        content: 'Worked part-time as a Software Developer for 3 months during the 8th semester, focusing on enhancing development skills while balancing academic commitments.',
      },
    ],
  },
  {
    id: 2,
    date: 'August 2023 - July 2024',
    name: 'Junior Developer',
    description: 'Worked full-time as a Junior Developer, collaborating with the Project Manager to refine component specifications and improve user engagement.',
    tabs: [
      {
        name: 'Full Time',
        content: 'Worked full-time as a Junior Developer, collaborating with the Project Manager to refine component specifications and improve user engagement.',
      },
      {
        name: 'Freelancing',
        content: 'Developed a budget forecasting website for a government office, focusing on creating a user-friendly interface to streamline financial planning and budget analysis.',
      },
    ],
  },
  {
    id: 3,
    date: 'July 2024 - Present',
    name: 'Software Developer',
    description: 'Owned end-to-end feature development, transforming the application UI into a streamlined dashboard model using React.js and Redux, while actively collaborating with clients to resolve issues.',
    tabs: [],
  },
];


const ExperienceMap = () => {
  const [activeTab, setActiveTab] = useState({});

  const handleTabClick = (expId, tabName) => {
    setActiveTab(prev => ({
      ...prev,
      [expId]: tabName
    }));
  };

  return (
    <div className="experiencemap-main-container">
      <div className="experiencemap-timeline">
        {experiences.map((exp, index) => (
          <React.Fragment key={exp.id}>
            <div className="experiencemap-card">
              <div className="experiencemap-date">{exp.date}</div>
              <div className="experiencemap-name">{exp.name}</div>
              <div className="experiencemap-tabs">
                {exp.tabs.map(tab => (
                  <button
                    key={tab.name}
                    className={`experiencemap-tab ${activeTab[exp.id] === tab.name ? 'active' : ''}`}
                    onClick={() => handleTabClick(exp.id, tab.name)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="experiencemap-description">
                {activeTab[exp.id] 
                  ? exp.tabs.find(tab => tab.name === activeTab[exp.id]).content
                  : exp.description}
              </div>
            </div>
            {index < experiences.length - 1 && (
              <ChevronRight className="experiencemap-chevron" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExperienceMap;
