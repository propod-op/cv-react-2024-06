import React, { useEffect, useState } from "react";
import { SectionParcours } from "./Mobile/SectionParcours";
import { SectionPortefolio } from "./Mobile/SectionPortefolio";
import { SectionPresentation } from "./Mobile/SectionPresentation";
import { SectionContactezMoi } from "./Mobile/SectionContactezMoi";
import { MenuBar } from "./MenuBar";

export const MobilePage = ({ scrollPosition }) => {
	if (scrollPosition > 675 && scrollPosition > 1670) {
		{
			/* trouver une methode pour faire glisser presentation de droite à gauche */
		}
	}

	return (
		<div className="main-container wide">
			<MenuBar />

			<SectionPresentation />
			<SectionParcours />
			<SectionPortefolio />
			<SectionContactezMoi />
		</div>
	);
};
