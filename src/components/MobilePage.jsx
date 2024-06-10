import { SectionParcours } from "./Mobile/SectionParcours";
import { SectionPortefolio } from "./Mobile/SectionPortefolio";
import { SectionPresentation } from "./Mobile/SectionPresentation";
import { SectionContactezMoi } from "./Mobile/SectionContactezMoi";

export const MobilePage = () => {
	return (
		<div className="main-container wide">
			<SectionPresentation />
			<SectionParcours />
			<SectionPortefolio />
			<SectionContactezMoi />
		</div>
	);
};
