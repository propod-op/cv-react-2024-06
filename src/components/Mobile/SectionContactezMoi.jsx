import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Scotch } from "../Scotch";
import portefolio from "../../assets/images//contactez-moi.jpg";

export const SectionContactezMoi = () => {
	const [emailData, setEmailData] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmailData({
			...emailData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.send("service_5c8hvbg", "template_u2yvovq", emailData, "5ZrkazOkD5hRYa0eg").then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
				alert("Email sent successfully!");
				setEmailData({
					user_name: "",
					user_email: "",
					message: "",
				});
			},
			(error) => {
				console.log("FAILED...", error);
				alert("Failed to send email.");
			}
		);
	};

	return (
		<section id="CON" className="contactez-moi">
			<h2>CONTACTEZ-MOI</h2>
			<form onSubmit={handleSubmit}>
				<div className="scotch-contactez-moi-1">
					<Scotch on="mobile" text={"Votre adresse e-mail"} angle={-3} size={"long"} style={{ marginLeft: "4rem" }} />
				</div>
				<input type="text" name="user_email" placeholder="Your email" value={emailData.user_email} onChange={handleChange} required />
				<div className="scotch-contactez-moi-2">
					<Scotch on="mobile" text={"Votre message"} angle={1} size={"long"} style={{ marginLeft: "2rem" }} />
				</div>
				<textarea name="message" placeholder="Message" value={emailData.message} onChange={handleChange} required></textarea>
				<p>Cocher avant d'envoyer</p>
				<button type="submit">Envoyer le mail</button>
			</form>
		</section>
	);
};
