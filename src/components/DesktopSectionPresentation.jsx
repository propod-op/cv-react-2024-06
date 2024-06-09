import React, { useState, useEffect } from "react";
import { Scotch } from "./Scotch";

export const DesktopSectionPresentation = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = (e) => {
		const position = e.target.scrollPosition;
		setScrollPosition(position);
	};

	useEffect(() => {
		console.log(scrollPosition);
	}, [scrollPosition]);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className={`presentation fade-in ${isVisible ? "show" : ""}`}>
			<div className="column left">
				<div className="container">
					<p>Hi everybody !</p>
					<p>
						JE SUIS <span>OLIVIER</span>
					</p>
					<p></p>
					<span className="alignRight">
						<Scotch className="" text={"REACT Developper"} angle={-3} size={"long"} style={{ marginLeft: "4rem" }} />
					</span>
					<p className="texte">Issu de 15 ans d’expérience dans l’imprimerie, j’ai décidé de poursuivre mon parcours dans le domaine du numérique et plus précisément en développement FRONT REACT</p>
					<p className="citation">
						<span className="guillemet-open"></span>
						<span className="phrase">
							Découvrons ensemble mon parcours <br />
							et mes compétences...<span className="guillemet-close"></span>
						</span>
					</p>
				</div>
			</div>
			<div className="column right"></div>
		</section>
	);
};
