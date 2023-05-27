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
        variant={activeCard === 'programming-lang' ? 'primary' : ''}
        onClick={() => handleCardClick('programming-lang')
      

      }
      className="hoverable-card"
      >
        <Card.Body>
          <h1>Programming Language</h1>
          <div className="icon-text">
            <FontAwesomeIcon icon={faJava} className="skill-icon" />
            <p>Java</p>
          </div>
        </Card.Body>
      </Card>
      <Card.Divider />


      <Card
        variant={activeCard === 'front-end' ? 'primary' : ''}
        onClick={() => handleCardClick('front-end')}
        className="hoverable-card"

        

      >
        <Card.Body>
          <h1>Front-End</h1>
          <div className="icon-text">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
              <p>HTML</p>
            </div>
            <div className="icon-wrapper">

              <FontAwesomeIcon icon={faCss3} className="skill-icon" />
              <p>CSS</p>
            </div>
            <div className="icon-wrapper">

            <p>Tailwind CSS</p>
            </div>
            <div className="icon-wrapper">

            <FontAwesomeIcon icon={faJs} className="skill-icon" />
            <p>JavaScript</p>
            </div>
            <div className="icon-wrapper">

            <FontAwesomeIcon icon={faReact} className="skill-icon" />
            <p>React.js</p>
            </div>

           
          </div>
        </Card.Body>
      </Card>
      <Card.Divider />


      <Card
  variant={activeCard === 'back-end' ? 'primary' : ''}
  onClick={() => handleCardClick('back-end')}
  className="hoverable-card"

>
  <Card.Body >
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
        <p>PostGre sql</p>
      </div>
    </div>
  </Card.Body>
</Card>
<Card.Divider />


    </div>
  );
};

export default Skills;
