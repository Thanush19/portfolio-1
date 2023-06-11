import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
 import './skill.css';

const Skills = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="prog-lang">
        <h2>Programming Languages</h2>
        <div
          className={`skill-icon ${hoveredIcon === faJava ? 'hovered' : ''}`}
          onMouseEnter={() => handleIconHover(faJava)}
          onMouseLeave={handleIconLeave}
        >
          <FontAwesomeIcon icon={faJava} />
          <p> JAVA</p>
        </div>
        {/* Add other programming languages icons */}
      </div>
      <div className="front-end">
        <h2>Front-End Technologies</h2>
        <div
          className={`skill-icon ${hoveredIcon === faHtml5 ? 'hovered' : ''}`}
          onMouseEnter={() => handleIconHover(faHtml5)}
          onMouseLeave={handleIconLeave}
        >
          <FontAwesomeIcon icon={faHtml5} />
          <p> HTML</p>
        </div>
        <div
          className={`skill-icon ${hoveredIcon === faCss3 ? 'hovered' : ''}`}
          onMouseEnter={() => handleIconHover(faCss3)}
          onMouseLeave={handleIconLeave}
        >
          <FontAwesomeIcon icon={faCss3} />
          <p> CSS</p>
        </div>
        <div
          className={`skill-icon ${hoveredIcon === faJs ? 'hovered' : ''}`}
          onMouseEnter={() => handleIconHover(faJs)}
          onMouseLeave={handleIconLeave}
        >
          <FontAwesomeIcon icon={faJs} />
          <p> JAVASCRIPT</p>
        </div>
        <div
          className={`skill-icon ${hoveredIcon === faReact ? 'hovered' : ''}`}
          onMouseEnter={() => handleIconHover(faReact)}
          onMouseLeave={handleIconLeave}
        >
          <FontAwesomeIcon icon={faReact} />
          <p> REACT JS</p>
        </div>
        {/* Add other front-end technologies icons */}
      </div>
      <div className="back-end">
        <h2>Back-End Technologies</h2>
        <div
          className={`skill-icon ${hoveredIcon === faNode ? 'hovered' : ''}`}
          onMouseEnter={() => handleIconHover(faNode)}
          onMouseLeave={handleIconLeave}
        >
          <FontAwesomeIcon icon={faNode} />
          <p>NODE JS</p>
        </div>
        <div
          className={`skill-icon ${
            hoveredIcon === faDatabase ? 'hovered' : ''
          }`}
          onMouseEnter={() => handleIconHover(faDatabase)}
          onMouseLeave={handleIconLeave}
        >
          <FontAwesomeIcon icon={faDatabase} />
          <p>MONGODB</p>
        </div>
        {/* Add other back-end technologies
        {/* Add other back-end technologies icons */}
      </div>
    </div>
  );
};

export default Skills;
