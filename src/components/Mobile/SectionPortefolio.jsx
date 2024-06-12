import { Scotch } from "../Scotch";
import portefolio from "../../assets/images/portefolio-onceagain.jpg";
import estamp from "../../assets/images/projet-estamp.png";
import xpsuite from "../../assets/images/projet-xpsuite.png";

export const SectionPortefolio = () => {
	return (
		<section id="POR" className="portefolio">
			<h2>
				PORTEFOLIO
				<div className="scotch-position-1">
					<Scotch on={"mobile"} text={"OnceAgain.fr"} angle={-3} size={"long"} style={{ marginLeft: "4rem" }} />
				</div>
			</h2>
			<div className="content">
				<h3 className="title">
					« J'ai eu la chance de travailler avec l'équipe de OnceAgain.fr ...»
					<br />
					mes missions :
				</h3>

				<img src={portefolio} alt="onceagain-homepage" />
				<ul>
					<li>Création d'une page de produits avec son filtre de produits.</li>
					<li>Mise à jour de la charte graphique</li>
					<li>Ajout de fonctionnalités</li>
				</ul>
			</div>

			<div className="content">
				<h3 className="title">« J'ai réalisé quelques applications VB.Net pour l'entreprise de tampons pour laquelle je travaillais.»</h3>
				<img src={xpsuite} alt="projet tampon numérique" />
				<ul>
					<li>J'ai commencé par des macro VB dans CorelDraw, automatisant des taches associées à des raccourcis clavier.</li>
					<li>
						Puis XPsuite, une application de gestion des expéditions.
						<br />
						(Parmis ses fonctionnalités, la possibilité d'imprimer en PDF le tableau des expéditions de la semaine).
					</li>

					<li>
						J'ai commencé une étude de faisabilité d'un produit encore inexistant : <br />
						<b>le tampon numérique.</b>
						<br />
						<br />
						Etude sur la propriété intellectuelle (marque et conception), étude sur le fonctionnement, proposition d'un modèle compacte moderne recyclé avec écran et d'un autre en bois piloté par application mobile. Recherche de partenaires pour la conception du prototype...
					</li>
					<img src={estamp} alt="projet tampon numérique" />
				</ul>
			</div>
			<div className="content">
				<h3 className="title">
					« En auto-didacte,
					<br /> j'ai commencé à apprendre PHP et les CMS »
				</h3>

				<ul>
					<li>
						<b>Loveradio : </b>C'était (site non maintenu) une radio sur un site de diffusion en streaming. Je lui ai créé une interface "NY street", avec la météo, la jaquette et les informations sur le titre en cours de lecture grâce à des API publiques, des infos concert etc...
					</li>
					<li>
						<b>ASC-ING.fr :</b> un site d'une société d'ingénieurie de systèmes de surveillance.
					</li>
					<li>
						<b>Passionkoi28.com :</b> mon 1er CMS en production. Grâce auquel, j'ai appris beaucoup sur le CMS Prestashop.
					</li>
					<li>
						<b>Statera-vita.fr :</b> Site pour une professionnelle des médécines douces.
					</li>
				</ul>
			</div>
			<div></div>
		</section>
	);
};
