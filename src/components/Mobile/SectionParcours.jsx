import { useRef } from 'react';
import parcours from '../../assets/images/parcours-courbes-white.svg';
import '../../assets/css/scrollEffect.css';
import { useHtmlElementIsDisplayed } from '../../hooks/useHtmlElementIsDisplayed';
import { Bubble } from '../commons/Bubble';
import { bubblesContent } from '../../assets/bubblesContent';

export const SectionParcours = () => {
  const sectionRef = useRef(null); // Correctly define the sectionRef here
  const { isDisplayed } = useHtmlElementIsDisplayed(sectionRef, 200);
  const exposedClass = isDisplayed ? 'exposed' : 'notExposed';

  return (
    <section id="PAR" className={`parcours`} ref={sectionRef}>
      {/* <section id="PAR" className={`parcours ${exposedClass}`} ref={sectionRef}></section> */}
      <h2>PARCOURS</h2>

      <div className="philosophie">
        "Issu de l'imprimerie, j'ai toujours voulu créer des outils utiles pour
        mes proches ou mes patrons. Lorsque l'on commence à programmer on
        imagine plein de choses qui nous paraissent lointaines en terme de
        réalisation. De petits projets en plus grands, on voit sa connaissance
        s'élargir. Puis le verrou saute, on réalise que l'on comprends les
        rouages, la syntaxe, puis les procédures. Et la porte s'ouvre aux
        projets..."
      </div>
      <p>(Cliquez sur les éléments pour plus de détails)</p>
      <div className="bubble-container">
        {bubblesContent.map((bubble, key) => (
          <Bubble
            key={key}
            langage={bubble.langage}
            title={bubble.title}
            imageClass={bubble.langage}
            content={bubble.content}
          />
        ))}
      </div>
    </section>
  );
};
