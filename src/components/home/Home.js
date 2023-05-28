import React, { useEffect, useRef }  from 'react'
import { gsap } from 'gsap';

import './home.css'
import photo from '../../assets/thanush-n-bg.png'
import lottie from '../../assets/coding1.json'
import { motion, useAnimation  } from 'framer-motion';
import { Application } from '@splinetool/runtime';
import lottieGif from '../../assets/lottie-gif.gif'





const Home = () => {
  //  useEffect(() => {
  //   const canvas = document.getElementById('canvas3d');
  //   const app = new Application(canvas);
  //   app.load('https://prod.spline.design/KjU4kC6sOmHeYQIv/scene.splinecode');
  // }, []);

//   const professionText = 'Full Stack Developer';

  // const taglineVariants = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { delay: 1, duration: 1 },
  // };

  // const professionVariants = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { delay: 1, duration: 1 },
  // };
  const nameRef = useRef(null);
  const professionRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [nameRef.current, professionRef.current, taglineRef.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      nameRef.current.classList.toggle('shake');
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="content">
        <p ref={nameRef} className="name">
          👋 Hello, This is Thanush
        </p>
        <p ref={professionRef} className="profession">
          Full Stack Developer
        </p>
        <p ref={taglineRef} className="tagline">
          "Building the Web from Front to Back: Empowering User Experiences with Full Stack Expertise"
        </p>
      </div>
      <div className="lottie">
        <img src={lottieGif} alt="Lottie GIF" width={400} height={400} />
      </div>
    </div>
  );
};

export default Home;