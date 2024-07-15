import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Scotch } from '../commons/Scotch';
import SvgIcon from '../Mobile/SvgIcon';

export const SectionContactezMoi = () => {
  const [emailData, setEmailData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_5c8hvbg',
        'template_u2yvovq',
        emailData,
        '5ZrkazOkD5hRYa0eg',
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send email.');
        },
      );
  };

  return (
    <section id="CON" className="contactez-moi">
      <h2>CONTACTEZ-MOI</h2>
      <form onSubmit={handleSubmit}>
        <Scotch
          on="desktop"
          text={'Votre adresse e-mail'}
          angle={-3}
          size={'short'}
          style={{ marginLeft: '4rem' }}
        />
        <input
          type="text"
          name="user_email"
          placeholder="Votre email"
          value={emailData.user_email}
          onChange={handleChange}
          required
        />
        <Scotch
          on="desktop"
          text={'Votre message'}
          angle={1}
          size={'long'}
          style={{ marginLeft: '2rem' }}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={emailData.message}
          onChange={handleChange}
          required
        ></textarea>
        {/* <p>Cocher avant d'envoyer</p> */}
        <button type="submit">
          Envoyer le mail <SvgIcon fillColor="#e9e8de" />
        </button>
      </form>
    </section>
  );
};
