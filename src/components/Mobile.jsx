import "../assets/css/fonts.css";
/*import "../assets/css/mobile.css";*/

import portefolio from "../assets/images/portefolio-onceagain.jpg";
import parcours from "../assets/images/parcours-courbes-white.svg";

import { isMobile } from "react-device-detect";

if (isMobile) {
	import("../assets/css/mobile.css");
}

export const Mobile = () => {
	return (
		<div className="main-container wide">
			<section className="presentation">
				<h2>PRESENTATION</h2>
				<div className="photo"></div>
				<div className="texte">
					<p className="hi">Hi everybody !</p>
					<p className="je-suis">
						JE SUIS <span className="green-bold">OLIVIER</span>
					</p>
					<p className="texte">Issu de 15 ans d’expérience dans l’imprimerie, j’ai décidé de poursuivre mon parcours dans le domaine du numérique et plus précisément en développement FRONT REACT</p>

					<span className="phrase">
						Découvrons ensemble mon parcours et
						<br /> mes compétences...<span className="guillemet-close"></span>
					</span>
				</div>
			</section>
			<section className="parcours">
				<h2>PARCOURS</h2>
				<img className="parcours" src={parcours} alt="parcours olivier" />
			</section>
			<section className="portefolio">
				<h2>PORTEFOLIO</h2>
			</section>
		</div>
	);
};
