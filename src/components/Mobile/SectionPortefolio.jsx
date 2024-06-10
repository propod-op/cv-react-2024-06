import { Scotch } from "../Scotch";
import portefolio from "../../assets/images/portefolio-onceagain.jpg";

export const SectionPortefolio = () => {
	return (
		<section className="portefolio">
			<h2>
				PORTEFOLIO
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
					<li>
						Puis XPsuite, une application de gestion des expéditions.
						<br />
						(Parmis ses fonctionnalités, la possibilité d'imprimer en PDF le tableau des expéditions de la semaine).
					</li>

					<li>J'ai commencé une étude de faisabilité d'un produit encore inexistant : le tampon numérique.</li>
				</ul>
			</div>
			<div className="content">
				<p>J'ai commencé a faire des sites (d'abord PHP, puis en Javascript...)</p>

				<ul>
					<li>
						<b>Loveradio : </b>C'était (site non maintenu) une radio en streaming sur un site de flux musicaux. Je lui ai créé une interface "NY street", avec la météo, la jaquette et les informations sur le titre en cours de lecture grâce à des API publiques, des infos concert etc...
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
