import React from 'react';
import emailjs from 'emailjs-com';
import './Email.css';



export default function Email() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_px7qm5b', e.target, 'user_BQNJGxxBwRveKYtDvgA0Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
     
      <textarea name="message" />
      <div className="input_button">
        <input style={{backgroundColor: '#C5D2EC', borderRadius: '10px', padding: '5px', textAlign: 'center', fontWeight: 'bold', width: '200px', border: '1px solid gray'}} type="submit" value="SUBMIT" />
      </div>
    </form>
  );
}