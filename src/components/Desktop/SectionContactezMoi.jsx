import React, { useState, useEffect } from "react";
import { Scotch } from "../Scotch";

export const SectionContactezMoi = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
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
	);
};
