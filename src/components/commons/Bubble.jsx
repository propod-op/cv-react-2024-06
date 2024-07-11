import { React, useEffect, useState } from 'react';
import '../../assets/css/bubble.css';

export const Bubble = ({ langage, title, content }) => {
  const [closed, setClosed] = useState(true);

  const handleShowDetail = () => {
    setClosed(false);
  };

  const handleHideDetail = () => {
    setClosed(true);
  };

  // useEffect(() => {}, []);

  return (
    <div className="bubble">
      <div className={`langage ${langage}`} onClick={handleShowDetail}></div>

      <div className={`panel-text ${closed ? 'closed' : 'open'}`}>
        <div className="top-bar">
          {' '}
          <div className="title">{title}</div>
          <div className={`close-button`} onClick={handleHideDetail}></div>
        </div>
        <div className={`content-image ${langage}`}></div>
        {/* <div className="title">{title}</div> */}
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={`content`}
        ></div>
      </div>
    </div>
  );
};
