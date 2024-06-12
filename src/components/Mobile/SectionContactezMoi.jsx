import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Scotch } from "../Scotch";

export const SectionContactezMoi = () => {
	let canSendMail = false;

	function onChange(value) {
		console.log("Captcha value:", value);
		canSendMail = value;
	}

	const [emailData, setEmailData] = useState({
		user_name: "",
		user_email: "",
		user_phone: "",
		message_subject: "",
		message_content: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmailData({
			...emailData,
			[name]: value,
		});
	};

	useEffect(() => {}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (canSendMail === false) {
			console.log("Veuillez valider votre Captcha");
			return false;
		}
		emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, emailData, process.env.REACT_APP_EMAILJS_USER_ID).then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
				alert("Votre email à bien été envoyé !");
				setEmailData({
					user_name: "",
					user_email: "",
					user_phone: "",
					message_subject: "",
					message_content: "",
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
			<form onSubmit={handleSubmit}>
				<h2>CONTACTEZ-MOI</h2>
				<div className="scotch-contactez-moi-1">
					<Scotch on="mobile" text={"Vos informations"} angle={-3} size={"long"} style={{ marginLeft: "4rem" }} />
				</div>
				<input type="text" name="user_name" placeholder="Votre nom" value={emailData.user_name} onChange={handleChange} required />
				<input type="text" name="user_email" placeholder="Votre email" value={emailData.user_email} onChange={handleChange} required />
				<input type="text" name="user_phone" placeholder="Votre numéro (optionnel)" value={emailData.user_phone} onChange={handleChange} />
				<input type="text" name="message_subject" placeholder="Votre sujet" value={emailData.message_subject} onChange={handleChange} required />

				<div className="scotch-contactez-moi-3">
					<Scotch on="mobile" text={"Votre message"} angle={1} size={"long"} style={{ marginLeft: "2rem" }} />
				</div>
				<textarea name="message_content" value={emailData.message_content} onChange={handleChange} required></textarea>
				<ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onChange} />
				<button type="submit">Envoyer le mail</button>
			</form>
		</section>
	);
};
