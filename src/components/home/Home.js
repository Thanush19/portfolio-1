import React from 'react'
import './home.css'
import photo from '../../assets/thanush-n-bg.png'
import lottie from '../../assets/coding1.json'
import { motion, useAnimation  } from 'framer-motion';
import Lottie from 'lottie-react-web';




const Home = () => {
  const professionText = 'Full Stack Developer'; // Define professionText here

  const taglineVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 1, duration: 1 },
  };
  const professionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 1, duration: 1 },
  };
  

  
  return (
    <div className='container'>
    <div className="content">
      <p className='name'> Hi , I'm Thanush</p>
      {/* <motion.p
          className='profession'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {professionText.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '} {/* Add space between words */}
              {/* {word.split('').map((letter, letterIndex) => (
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
        </motion.p> */} 
         {/* <motion.p
            className="profession"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
          {professionText.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '}
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
    </motion.p> */}
    <motion.p
            className="profession"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
          {professionText.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '}
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
      className="tagline"
      // style={{
      //   fontFamily: 'Mosk Ultra-Bold, sans-serif',
      //   fontWeight: 900,
      //   fontSize: '20px',
      //   lineHeight: '53px',
      //   WebkitFontSmoothing: 'antialiased',
      //   MozOsxFontSmoothing: 'grayscale',
      //   color: '#2B75E4',
      //   WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
      //   WebkitTextStrokeColor: '#2B75E4',
      //   WebkitTextStrokeWidth: '1.5px',
      //   position: 'relative',
      //   display: 'inline-block',
      //   overflow: 'hidden',
      // }}
      initial="initial"
      animate="animate"
      transition="transition"
      variants={taglineVariants}
    >
      Crafting innovative solutions through code
    </motion.p>
      {/* <motion.p
        className='tagline'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Crafting innovative solutions through code
      </motion.p> */}
    </div>
    <motion.div/>
    {/* <div className="img-container">
  <motion.img
    src={photo}
    alt="Thanush"
    className="photo"
    style={{ maxWidth: '300px' }}
  />
</div> */}
    <div className="lottie-container">
    <Lottie
        options={{
          animationData: lottie,
          // Additional options if needed
        }}
        width={400} // Adjust the width and height to fit your desired dimensions
        height={400}
      />

    </div>
  </div>
        
  )
}

export default Home