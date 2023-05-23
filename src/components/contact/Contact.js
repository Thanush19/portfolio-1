import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'
import ContactForm from './Email'

const Contact = () => {
  return (
    <>
      <div className="icons">
        
          <a href="https://github.com/Thanush19" target="_blank" >
          <FaGithub/>

          </a>
       
      
          <a href="https://www.linkedin.com/in/thanushkumar-r-d-6a9a031bb/" target="_blank" >
          <FaLinkedin/>
          </a>
        
    </div>
      <ContactForm />

    
    </>
  )
}

export default Contact