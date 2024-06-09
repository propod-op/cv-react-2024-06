import "../assets/css/fonts.css";
import "../assets/css/scotch.css";

export const Scotch = ({ text, angle, size }) => {
	return (
		<div className={`scotch desktop ${size}`} style={{ transform: `rotate(${angle}deg)` }}>
			{text}
		</div>
	);
};
