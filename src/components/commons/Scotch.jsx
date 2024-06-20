import '../../assets/css/fonts.css';
import '../../../src/assets/css/scotch.css';

export const Scotch = ({ on, text, angle, size }) => {
  return (
    <div
      className={`scotch ${on} ${size}`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {text}
    </div>
  );
};
