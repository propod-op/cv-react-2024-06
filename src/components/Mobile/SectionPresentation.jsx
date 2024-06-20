import { useEffect, useState } from 'react';
import photo from '../../assets/images/presentation-right.png';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Toast } from '../commons/Toast';

export const SectionPresentation = () => {
  const { scrollPosition } = useScrollPosition();
  const [className, setClassName] = useState();

  const condition = scrollPosition >= 0 && scrollPosition < 300;

  useEffect(() => {
    if (condition) {
      console.log('class show');
      setClassName('show');
    } else {
      console.log('class hide');
      setClassName('hide');
    }
  }, [condition]);

  return (
    <section id="PRE" className={`presentation bg-dotted ${className}`}>
      <h2>PRESENTATION</h2>
      <Toast
        style="success"
        modal={true}
        buttonText="Merci, j'ai compris !"
        title="Bravo !"
        message="Ayé vous êtes connecté a notre réseau !"
        duration={3000}
      />
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
