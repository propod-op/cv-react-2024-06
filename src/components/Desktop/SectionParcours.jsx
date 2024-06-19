import React, { useState, useEffect } from 'react';
import { Scotch } from '../Scotch';
import parcours from '../../assets/images/parcours-courbes-white.svg';

export const SectionParcours = () => {
  return (
    <section className="parcours">
      <div className="column left">
        <h2>
          PARCOURS <i>de Dev</i>
        </h2>
        <img src={parcours} alt="parcours-olivier" />
        <div className="column right"></div>
      </div>
      <div className="column right"></div>
    </section>
  );
};
