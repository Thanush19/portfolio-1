import React, { useState } from 'react';
import { Card, Text } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './skill.css'

const Skills = () => {
  const [activeCard, setActiveCard] = useState('');

  const handleCardClick = (category) => {
    setActiveCard(activeCard === category ? '' : category);
  };

  return (
    <div className="skills">
      <Card
        variant={activeCard === 'programming-lang' ? 'primary' : 'bordered'}
        onClick={() => handleCardClick('programming-lang')}
      >
        <Card.Body>
          <h1>Programming Language</h1>
          <div className="icon-text">
            <FontAwesomeIcon icon={faJava} className="skill-icon" />
            <p>Java</p>
          </div>
        </Card.Body>
      </Card>

      <Card
        variant={activeCard === 'front-end' ? 'primary' : 'bordered'}
        onClick={() => handleCardClick('front-end')}
      >
        <Card.Body>
          <h1>Front-End</h1>
          <div className="icon-text">
            <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
            <p>HTML</p>
            <FontAwesomeIcon icon={faCss3} className="skill-icon" />
            <p>CSS</p>
            <p>Tailwind CSS</p>
            <FontAwesomeIcon icon={faJs} className="skill-icon" />
            <p>JavaScript</p>
            <FontAwesomeIcon icon={faReact} className="skill-icon" />
            <p>React.js</p>
          </div>
        </Card.Body>
      </Card>
      <Card
  variant={activeCard === 'back-end' ? 'primary' : 'bordered'}
  onClick={() => handleCardClick('back-end')}
>
  <Card.Body>
    <h1>Back-end</h1>
    <div className="icon-text">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faNode} className="skill-icon" />
        <p>Node.js</p>
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faNode} className="skill-icon" />
        <p>Express.js</p>
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
        <p>Database</p>
      </div>
    </div>
  </Card.Body>
</Card>

    </div>
  );
};

export default Skills;
