import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const useEmailJS = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const [status, setStatus] = useState('waiting');

  const send = (formData) => {
    setStatus('sending');

    emailjs.send(serviceId, templateId, formData, userId).then(
      (response) => {
        setStatus('success');
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        setStatus('failure');
        console.log('FAILED...', error);
      },
    );
  };

  const resetStatus = () => {
    setStatus('waiting');
  };

  return { send: send, status: status, resetStatus: resetStatus };
  // return { send, isSending, isSended };
};
