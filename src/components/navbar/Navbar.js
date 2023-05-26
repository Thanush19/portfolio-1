import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaEnvelope, FaCode, FaCogs } from 'react-icons/fa'; // Import the desired Font Awesome icons
import logo from '../../assets/Thanush-removebg-preview.png';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  const [activeIcon, setActiveIcon] = useState(null);
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          <Link to="/" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className='logo-img' />
          </Link>
        </div>

        <div className="links">
          <Link to="/" className="link">
            <FaHome className="icon" />
            <FaHome
              className={`icon ${activeIcon === 'home' ? 'active' : ''}`}
              onClick={() => handleIconClick('home')}
            />
            <p>Home</p>
          </Link>
          <Link to="/contact" className="link">
            <FaEnvelope
                className={`icon ${activeIcon === 'contact' ? 'active' : ''}`}
                onClick={() => handleIconClick('contact')}
              />
                <p>Contact</p>
          </Link>
          <Link to="/projects" className="link">
            <FaCode
                className={`icon ${activeIcon === 'projects' ? 'active' : ''}`}
                onClick={() => handleIconClick('projects')}
              />

            <p>Projects</p>
          </Link>
          {/* <Link to="/resume" className="link">
            <FaFileAlt className="icon" /> {/* Add Font Awesome icon */}
            {/* <p>Resume</p> */}
          {/* </Link> */}
          <Link to="/skills" className="link">
            <FaCogs
              className={`icon ${activeIcon === 'skills' ? 'active' : ''}`}
              onClick={() => handleIconClick('skills')}
            />
            <p>Skills</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
