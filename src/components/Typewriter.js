import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Typewriter = ({ text, duration }) => {
  const controls = useAnimation();

  const animateText = async () => {
    for (let i = 0; i < text.length; i++) {
      await controls.start({ opacity: 1, transition: { duration: 0.3 } });
      await controls.start({ opacity: 0, transition: { duration: 0.3 } });
    }
  };

  React.useEffect(() => {
    animateText();
  }, []);

  return <motion.span animate={controls}>{text}</motion.span>;
};

export default Typewriter;
