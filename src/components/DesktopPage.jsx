import { SectionPresentation } from './Desktop/SectionPresentation';
import { SectionParcours } from './Desktop/SectionParcours';
import { SectionPortefolio } from './Desktop/SectionPortefolio';
import { SectionContactezMoi } from './Desktop/SectionContactezMoi';
import { MenuBar } from './MenuBar';

export const DesktopPage = () => {
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
