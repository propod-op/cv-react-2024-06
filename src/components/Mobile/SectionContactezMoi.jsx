import { Scotch } from "../Scotch";
import portefolio from "../../assets/images//contactez-moi.jpg";

export const SectionContactezMoi = () => {
	return (
		<section className="contactez-moi">
			<h2>CONTACTEZ-MOI</h2>
			<form>
				<div className="scotch-contactez-moi-1">
					<Scotch className="" text={"Votre adresse e-mail"} angle={-3} size={"long"} style={{ marginLeft: "4rem" }} />
				</div>
				<input />
				<div className="scotch-contactez-moi-2">
					<Scotch className="" text={"Votre message"} angle={1} size={"long"} style={{ marginLeft: "2rem" }} />
				</div>
				<textarea></textarea>
				<p>Cocher avant d'envoyer</p>
				<button>ENVOYER</button>
			</form>
		</section>
	);
};
