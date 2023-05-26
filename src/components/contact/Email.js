import React from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './email.css';

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wwemznf', 'template_cm3pl2k', e.target, 'BVyZXOkK9qxWF4eMh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
      transition={{ duration: 0.5 }} // Animation duration and easing
      onSubmit={sendEmail}
    >
      <motion.label
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Name:
      </motion.label>
      <motion.input
        type="text"
        name="name"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <motion.label
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Email:
      </motion.label>
      <motion.input
        type="email"
        name="email"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      <motion.label
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Message:
      </motion.label>
      <motion.textarea
        name="message"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.1 }} // Scale animation on hover
        whileTap={{ scale: 0.9 }} // Scale animation on click
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Send
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;
