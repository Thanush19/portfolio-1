import React from 'react'
import ContactForm from './Email'
import { motion } from 'framer-motion';
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/thanushkumar-r-d-6a9a031bb/', '_blank');
  };
  const handleGithubProfileClick = () => {
    window.open('https://github.com/Thanush19', '_blank');
  };
  return (
    <>
      
      <ContactForm />
      <div className="socials">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="connect"
      >
        Let's Connect
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="learn"
      >
        Learn Together &amp; Grow Together
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="profile-heading"
        onClick={handleGithubProfileClick}
      >
        Github Profile
      </motion.h1>

      <motion.a
        href="https://github.com/Thanush19"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </motion.span>
      </motion.a>

      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="profile-heading"
        onClick={handleLinkedInClick}
      >
        Linkedin Profile
      </motion.h1>

      <motion.a
        href="https://www.linkedin.com/in/thanushkumar-r-d-6a9a031bb/"
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </motion.span>
      </motion.a>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="contact-info"
      >
        contact me at:
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="contact-info"
      >
        
        thanushkumarrd@gmail.com
      </motion.p>
      
     
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="contact-info"
      >
        7358191434
      </motion.p>
    </div>
    
    </>
  )
}

export default Contact