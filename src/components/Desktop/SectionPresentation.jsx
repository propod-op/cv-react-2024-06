import { useRef } from 'react';
import { useHtmlElementIsDisplayed } from '../../hooks/useHtmlElementIsDisplayed';
import '../../assets/css/scrollEffect.css';

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
      <div className="photo"></div>

      <div>
        <h2>PRESENTATION</h2>
        <p>Hi everybody !</p>
        <p>JE SUIS OLIVIER</p>
        <p>
          "Issu de 15 ans d’expérience dans l’imprimerie, j’ai décidé de
          poursuivre mon parcours dans le domaine du numérique et en me
          spécialisant sur le développement FRONT REACT..."
        </p>
        <p>
          Vous trouverez sur le site, mon parcours de développeur, des débuts
          avec VB.Net jusqu'à aujourd'hui avec Javascript.
        </p>
      </div>
      {/* <a href="#PAR" className="">
        <button
          className="pm-1"
          style={{ marginBottom: '5rem', width: '4rem' }}
        >
          Suite ➜
        </button>
      </a> */}
    </section>
  );
};
