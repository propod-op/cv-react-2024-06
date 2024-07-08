import { useRef } from 'react';
import '../../assets/css/scrollEffect.css';
import { useHtmlElementIsDisplayed } from '../../hooks/useHtmlElementIsDisplayed';

export const SectionPresentation = () => {
  const sectionRef = useRef(null); //  Définition de l'élément HTML <Section> dans un ref={sectionRef} en argument

  // Cas cde figure n°1 (plus spécifique mais plus facile à comprendre)
  const { isDisplayed } = useHtmlElementIsDisplayed(sectionRef, 300, true);
  const exposedClass = isDisplayed ? 'exposed' : 'notExposed';

  // Cas cde figure n°2 (plus ouvert mais plus compliqué à comprendre)
  // const { scrollConditionIsVerified } = useScrollCondition((scrollPosition) => {
  //   return (
  //     scrollPosition >= sectionRef.current.offsetTop &&
  //     scrollPosition < sectionRef.current.offsetHeight - 300
  //   );
  // }, true);
  // const exposedClass = scrollConditionIsVerified ? 'exposed' : 'notExposed';

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
