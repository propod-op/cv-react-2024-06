import React, { useEffect } from 'react';
import '../../assets/css/toast.css';
const Toast = (title, message) => {
  useEffect(() => {}, []);

  return (
    <div className="toast">
      <h3 className="title">BRAVO !</h3>
      <p className="message">Vous êtes connecté.</p>
    </div>
  );
};
