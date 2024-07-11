import { React, useEffect, useState } from 'react';
import '../../assets/css/bubble.css';

export const Bubble = ({ langage, title, content }) => {
  const [closed, setClosed] = useState(true);

  const handleShowText = () => {
    setClosed(false);
  };

  const handleHideText = () => {
    setClosed(true);
  };

  // useEffect(() => {}, []);

  return (
    <div className="bubble">
      <div className={`langage ${langage}`} onClick={handleShowText}></div>

      <div className={`panel-text ${closed ? 'closed' : 'open'}`}>
        <div className="top-bar">
          {' '}
          <div className="title">{title}</div>
          <div className={`close-button`} onClick={handleHideText}></div>
        </div>
        <div className={`content-image ${langage}`}></div>
        <div className={`content`}>{content}</div>
      </div>
    </div>
  );
};
