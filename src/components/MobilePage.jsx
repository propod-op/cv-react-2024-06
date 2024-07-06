import React from 'react';
import { SectionParcours } from './Mobile/SectionParcours';
import { SectionPortefolio } from './Mobile/SectionPortefolio';
import { SectionPresentation } from './Mobile/SectionPresentation';
import { SectionContactezMoi } from './Mobile/SectionContactezMoi';
import { MenuBar } from './MenuBar';

export const MobilePage = ({ scrollPosition }) => {
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
