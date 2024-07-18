import '../../assets/css/toast.css';
import React, { useEffect } from 'react';

// Toast styles : success (vert), danger (rouge), warning (orange) info (bleu)
// Toast modal : true (button) false (autoclose)

export const Toast = ({
  visible,
  style,
  title,
  message,
  autoClose,
  buttonText,
  duration,
  onClose,
}) => {
  const className = visible ? 'show' : 'hide';

  useEffect(() => {
    if (autoClose === false) {
      return;
    }

    const timeout = setTimeout(() => {
      //onClose();
    }, duration || 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [visible, autoClose]);

  return (
    <div className={`toast ${className} ${style}`}>
      <div className="title">{title}</div>
      <p className="message">{message}</p>
      {!autoClose && (
        <button className="success" onClick={onClose}>
          {buttonText}
        </button>
      )}
    </div>
  );
};
