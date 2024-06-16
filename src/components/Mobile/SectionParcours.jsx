import parcours from "../../assets/images/parcours-courbes-white.svg";

export const SectionParcours = () => {
	return (
		<section id="PAR" className="parcours">
			<h2>PARCOURS</h2>
			<img className="parcours" src={parcours} alt="parcours olivier" />
			<p >
			❝ J'ai commencé avec de spetits projets VB.Net, avec plein d'idées comme un gestionnaire de police pour la PAO, en effet avant c'était la galère la gestion des polices dans un service PAO, InstantFointForAll permettait d'installer et de désintaller les polices automatiquement en fonction d'un
				besoin pour le projets en cours uniquement. <br />
				<br />
				Puis il y a eu Le logiciel d'expéditions XPSuite utilisé en production chez RCA.
				<br /> J'ai été fréquemment face au problème de déploiement d'applications sur de nombreux postes, j'ai compris que les application client/serveur y remédiait mais aussi les applications en PHP/MySQL, une url... et Hop !!! Il a eu aussi le fait de déployer un site simple rapidement : les CMS
				sont efficaces : pour vendre ou juste une interface pour présenter sont activité...
				<br /> <br />
				Puis le Graal : Javascript, un peu comme python : il sait tout faire ou presque. On fait de s API Rest, des interfaces React, même faire tourner une application sur un serveur en local dans son entreprise, utiliser de l'AI...
				 ❞</p>
		</section>
	);
};
