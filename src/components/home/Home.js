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

  // useEffect(() => {
  //   gsap.fromTo(
  //     [nameRef.current, professionRef.current, taglineRef.current],
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
  //   );
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nameRef.current.classList.toggle('shake');
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  useEffect(() => {
    gsap.fromTo(
      professionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      professionRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
    );
  }, []);
  
  useEffect(() => {
    const tagline = taglineRef.current;
    const words = tagline.innerText.split(' ');

    tagline.innerHTML = ''; // Clear the existing text

    words.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.textContent = `${word} `;
      wordSpan.style.opacity = 0;
      tagline.appendChild(wordSpan);

      gsap.to(wordSpan, {
        opacity: 1,
        duration: 1,
        delay: index * 0.2,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="container">
      <video src="../../"autoPlay muted loop className="background-video"></video>
      <div className="content">
       
        <p className='name'>
        Hello, This is Thanush
        </p>
        <p ref={professionRef} className="profession">
          Full Stack Developer
        </p>
        <p ref={taglineRef} className="tagline">
          "Building the Web from Front to Back: Empowering User Experiences with Full Stack Expertise"
        </p>
      </div>
      <div className="lottie">
        <img src={lottieGif} alt="Lottie GIF"  />
      </div>
    </div>
  );
};

export default Home;