import { useEffect, useState, useRef } from 'react';
import { Toast } from '../commons/Toast';
import photo from '../../assets/images/presentation-right.png';
import '../../assets/css/scrollEffect.css';
import { useScrollEffect } from '../../hooks/useScrollEffect';
import { useRefOffset } from '../../hooks/useRefOffset';

export const SectionPresentation = () => {
  const sectionRef = useRef(null); //  Définition de l'élément HTML <Section> dans un ref={sectionRef} en argument
  const [sectionHeight, sectionTop, tolerance] = useRefOffset(sectionRef); // Obtenir le Y1 et Y2 de l'élément HTML <Section>
  const { exposedClass } = useScrollEffect(
    sectionTop,
    sectionHeight - tolerance,
  ); // Définir la classe de l'élément HTML <Section> 'exposed' ou 'notExposed'

  return (
    <section
      id="PRE"
      className={`presentation bg-dotted ${exposedClass}`}
      ref={sectionRef}
    >
      <h2>PRESENTATION</h2>
      {<div className="photo"></div>}
      <div className="content">
        <p className="hi">Hi everybody !</p>
        <p className="je-suis pm-1">
          JE SUIS <span className="">OLIVIER</span>
        </p>
        <p>
          Issu de 15 ans d’expérience dans l’imprimerie, j’ai décidé de
          poursuivre mon parcours dans le domaine du numérique et plus
          précisément en développement FRONT REACT
        </p>
        <br />
        Découvrons ensemble mon parcours et
        <br /> mes compétences...
      </div>
      <a href="#PAR" className="">
        <button
          className="pm-1"
          style={{ marginBottom: '5rem', width: '4rem' }}
        >
          Suite ➜
        </button>
      </a>
    </section>
  );
};
