import '../../assets/css/toast.css';
import React, { useEffect, useState } from 'react';

// Toast styles : success (vert), alert (rouge) , info (bleu)
// Toast modal : true (button) false (autoclose)
export const Toast = ({
  type,
  title,
  message,
  modal,
  buttonText,
  duration,
}) => {
  // Par defaut le composant a la classe 'hide' et est 'visible'
  const [className, setClassName] = useState('hide');
  const [visible, setVisible] = useState(true);
  const hideEffectDuration = 1000;

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (modal === false) {
      setClassName('show');

      const hideClassTimeout = setTimeout(() => {
        setClassName('hide');
      }, duration);

      const removeTimeout = setTimeout(() => {
        setVisible(false);
      }, duration + 500); // 500ms is the transition duration in CSS

      return () => {
        clearTimeout(hideClassTimeout);
        clearTimeout(removeTimeout);
      };
    }
    if (modal === true) {
      setClassName('show');
    }
  }, [duration, modal]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`toast ${className} ${type}`}>
      <div className="title">{title}</div>
      <p className="message">{message}</p>
      {modal === true && (
        <button className="success" onClick={handleClose}>
          {buttonText}
        </button>
      )}
    </div>
  );
};
