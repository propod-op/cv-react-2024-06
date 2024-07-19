import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEmailForm } from '../../hooks/useEmailForm';
import { useEmailJS } from '../../hooks/useSendEmail';
import { Scotch } from '../commons/Scotch';
import SvgIcon from './SvgIcon.jsx';
import { Toast } from '../commons/Toast.jsx';

export const SectionContactezMoi = () => {
  const [showToast, setShowToast] = useState(false);
  const [boxMessage, setBoxMessage] = useState('');
  const [boxStyle, setBoxStyle] = useState('');
  const [boxTitle, setBoxTitle] = useState('');
  const onClose = () => setShowToast(false);

  let canSendMail = false;

  function onChange(value) {
    console.log('Captcha value:', value);
    canSendMail = value;
  }

  const { formData, handleChange, reset } = useEmailForm();

  const { send, status } = useEmailJS();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSendMail === false) {
      // console.log('Veuillez valider votre Captcha');
      setBoxMessage(
        'Pensez à cocher le Captcha et bien remplir tout les champs',
      );
      setBoxStyle('alert');
      setBoxTitle("Erreur d'envoi de l'email");
      setShowToast(true);
      return false;
    }

    send(formData);
    setBoxTitle('Votre email envoyé !');
    setBoxMessage('Je vous repondrais sous peu.');
    setBoxStyle('success');
    setShowToast(true);
  };

  return (
    <section id="CON" className="contactez-moi bg-dotted">
      <Toast
        visible={showToast}
        style={boxStyle}
        autoClose={false}
        title={boxTitle}
        message={boxMessage}
        buttonText="OK"
        duration={1000}
        onClose={onClose}
        // ou onClose = {() => setShowToast(false)}
      />
      <form onSubmit={handleSubmit}>
        <h2>CONTACTEZ-MOI</h2>
        <Scotch
          on="mobile"
          text={'Vos informations'}
          angle={-3}
          size={'full'}
        />
        <input
          type="text"
          name="userName"
          placeholder="Votre nom"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="userEmail"
          placeholder="Votre email"
          value={formData.userEmail}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="userPhone"
          placeholder="Votre numéro (optionnel)"
          value={formData.userPhone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="messageSubject"
          placeholder="Votre sujet"
          value={formData.messageSubject}
          onChange={handleChange}
          required
        />

        <div className="scotch-contactez-moi-3">
          <Scotch
            on="mobile"
            text={'Votre message'}
            angle={1}
            size={'long'}
            style={{ marginLeft: '2rem' }}
          />
        </div>
        <textarea
          name="messageContent"
          value={formData.messageContent}
          onChange={handleChange}
          required
        ></textarea>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={onChange}
        />
        <button type="submit" className="pm-1">
          Envoyer le mail
          <SvgIcon fillColor="#e9e8de" />
        </button>
        {status === 'sending' && <p>envoi en cours...</p>}
      </form>
    </section>
  );
};
