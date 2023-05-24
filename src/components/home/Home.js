import React from 'react'
import './home.css'
import photo from '../../assets/thanush-n-bg.png'
import { motion, useAnimation  } from 'framer-motion';



const Home = () => {
  const professionText = 'Full Stack Developer'; // Define professionText here

  
  return (
    <div className='container'>
    <div className="content">
      <p className='name'> hi guys, This is Thanush</p>
      <motion.p
          className='profession'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {professionText.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '} {/* Add space between words */}
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  style={{ display: 'inline-block' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + letterIndex * 0.05 }}
                >
                  {letter}
                </motion.span>
              ))}
            </React.Fragment>
          ))}
        </motion.p>
      <motion.p
        className='tagline'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Crafting innovative solutions through code
      </motion.p>
    </div>
    <motion.div/>
    <div className="img-container">
  <motion.img
    src={photo}
    alt="Thanush"
    className="photo"
    style={{ maxWidth: '300px' }}
  />
</div>
  </div>
        
  )
}

export default Home