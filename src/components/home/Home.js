import React, { useEffect }  from 'react'
import './home.css'
import photo from '../../assets/thanush-n-bg.png'
import lottie from '../../assets/coding1.json'
import { motion, useAnimation  } from 'framer-motion';
import Lottie from 'lottie-react-web';
import { Application } from '@splinetool/runtime';





const Home = () => {
   useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/KjU4kC6sOmHeYQIv/scene.splinecode');
  }, []);

  const professionText = 'Full Stack Developer';

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
      <canvas id="canvas3d" className="canvas"></canvas> 

      <div className="content">
        <p className='name'>Hi, I'm Thanush</p>
        <motion.p
          className="profession"
          initial="initial"
          animate="animate"
          variants={professionVariants}
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
          initial="initial"
          animate="animate"
          transition="transition"
          variants={taglineVariants}
        >
          Crafting innovative solutions through code
        </motion.p>
      </div>
      <motion.div />

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
  );
}

export default Home;