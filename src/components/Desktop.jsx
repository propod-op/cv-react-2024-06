import "../assets/css/fonts.css";
import portefolio from "../assets/images/portefolio-onceagain.jpg";
import parcours from "../assets/images/parcours-courbes-white.svg";

import { isMobile } from "react-device-detect";
import { Scotch } from "./Scotch";
import { DesktopSectionPresentation } from "./DesktopSectionPresentation";

if (!isMobile) {
	import("../assets/css/desktop.css");
}

export const Desktop = () => {
	return (
		<div className="main-container wide" onScroll={(e) => console.log("scrolling!", e.target.scrollTop)}>
			<DesktopSectionPresentation />
			<section className="parcours">
				<div className="column left">
					<h2>
						PARCOURS <i>de Dev</i>
					</h2>
					<img src={parcours} alt="parcours-olivier" />
					<div className="column right"></div>
				</div>
				<div className="column right"></div>
			</section>
			<section className="portefolio">
				<h2>
					PORTEFOLIO{" "}
					<div className="scotch-position-1">
						<Scotch className="" text={"OnceAgain.fr"} angle={-3} size={"long"} style={{ marginLeft: "4rem" }} />
					</div>
				</h2>
				<div className="content">
					<p>J'ai eu la chance de travailler pour le site OnceAgain.fr, mes missions :</p>

					<ul>
						<li>Création d'une page de produit avec son filtre de produits.</li>
						<li>Mise à jour de la charte graphique</li>
						<li>Ajout de fonctionnalités</li>
					</ul>
				</div>

				<img src={portefolio} alt="onceagain-homepage" />
				<div className="content">
					<p>J'ai réalisé quelques applications VB.Net pour l'entreprise de tampons pour laquelle je travaillais.</p>

					<ul>
						<li>J'ai commencé par des macro VB dans CorelDraw, automatisant des taches associées à des raccourcis clavier.</li>
						<li>Puis XPsuite, une application de gestion des expéditions. </li>
						<li>Parmis ses fonctionnalités, la possibilité d'imprimer en PDF le tableau des expéditions de la semaine.</li>
						<li>J'ai commencé une étude de faisabilité d'un produit encore inexistant : le tampon numérique.</li>
					</ul>
				</div>
				<div className="content">
					<p>J'ai réalisé des sites en PHP statiques...</p>

					<ul>
						<li>Loveradio : C'était (site non maintenu) une radio en streaming sur un site de flux musicaux. Je lui ai créer une interface "NY street", avec la météo, la jaquettte et les informations sur le titre en cours de lecture grâce à des API publiques, des infos concert etc...</li>
						<li>ASC-ING.fr : un site d'une société d'ingénieurie de systèmes de surveillance.</li>
						<li>Passionkoi28.com : mon 1er CMS en production. Grâce auquel, j'ai appris beaucoup sur le CMS Prestashop.</li>
						<li>Statera-vita.fr : Site pour une professionnelle des médécines douces.</li>
					</ul>
				</div>
				<div></div>
			</section>
			<section className="contactez-moi">
				<div className="column left">
					<h2>CONTACTEZ-MOI</h2>
					<form>
						<div className="scotch-contactez-moi-1">
							<Scotch className="" text={"Votre adresse e-mail"} angle={-3} size={"long"} style={{ marginLeft: "4rem" }} />
						</div>
						<input placeholder="Votre email" />
						<div className="scotch-contactez-moi-2">
							<Scotch className="" text={"Votre message"} angle={1} size={"long"} style={{ marginLeft: "2rem" }} />
						</div>
						<textarea placeholder="Votre message"></textarea>
						<p>Cocher avant d'envoyer</p>
						<button>ENVOYER</button>
					</form>
				</div>
				<div className="column right"></div>
			</section>
		</div>
	);
};
