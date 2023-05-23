import React from 'react';
import emailjs from 'emailjs-com';

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
    <form onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="name" />

      <label>Email:</label>
      <input type="email" name="email" />

      <label>Message:</label>
      <textarea name="message" />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
