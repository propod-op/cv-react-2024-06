import { useRef, useState } from 'react';
import { Scotch } from '../commons/Scotch';
import { Toast } from '../commons/Toast';
import portefolio from '../../assets/images/portefolio-onceagain.jpg';
import estamp from '../../assets/images/projet-estamp.png';
import xpsuite from '../../assets/images/projet-xpsuite.png';
import { useHtmlElementIsDisplayed } from '../../hooks/useHtmlElementIsDisplayed';

export const SectionPortefolio = () => {
  const [showToast, setShowToast] = useState(false);

  const sectionRef = useRef(null); // Correctly define the sectionRef here
  const { isDisplayed } = useHtmlElementIsDisplayed(sectionRef, 300);
  const exposedClass = isDisplayed ? 'exposed' : 'notExposed';

  const onClose = () => setShowToast(false);

  return (
    <section id="POR" className={`portefolio ${exposedClass}`} ref={sectionRef}>
      <h2>PORTEFOLIO</h2>
      <button onClick={() => setShowToast(true)}>Toast it !</button>
      <Toast
        visible={showToast}
        style="success"
        autoClose={false}
        title="Well done !"
        message="Vous avez reussi à afficher le toast !"
        buttonText="OK, merci"
        duration={1000}
        onClose={onClose}
        // ou onClose = {() => setShowToast(false)}
      />
      <div>
        <Scotch
          on={'mobile'}
          text={'Site de OnceAgain.fr'}
          angle={-3}
          size={'full'}
          style={{ marginLeft: '4rem' }}
        />

        <div>
          <img src={portefolio} alt="onceagain-homepage" />
          <h3 className="title">
            « J'ai eu la chance de travailler avec l'équipe de OnceAgain.fr ...»
            <br />
          </h3>
          <hr />
          <h4> mes missions</h4>

          <ul>
            <li>
              Création d'une page de produits avec son filtre de produits.
            </li>
            <li>Mise à jour de la charte graphique</li>
            <li>Ajout de fonctionnalités</li>
          </ul>
          <hr />
        </div>
      </div>

      <div>
        <Scotch
          on={'mobile'}
          text={'Des applications VB.Net'}
          angle={2}
          size={'full'}
          style={{ marginLeft: '4rem' }}
        />

        <div>
          <img src={xpsuite} alt="projet tampon numérique" />
          <h3 className="title">
            « J'ai réalisé quelques applications VB.Net pour l'entreprise de
            tampons pour laquelle je travaillais.»
          </h3>
          <hr />
          <h4>VB.net</h4>
          <ul>
            <li>
              J'ai commencé par des macro VB dans CorelDraw, automatisant des
              taches associées à des raccourcis clavier.
            </li>
            <li>
              Puis XPsuite, une application de gestion des expéditions.
              <br />
              (Parmis ses fonctionnalités, la possibilité d'imprimer en PDF le
              tableau des expéditions de la semaine).
            </li>
          </ul>
          <hr />
          <h4>Etude de projet</h4>
          <ul>
            <li>
              lorsque je travaillais chez RCA, j'ai commencé une étude de
              faisabilité d'un produit encore inexistant :{' '}
              <b>le tampon numérique.</b>
              <br />
              <br />
            </li>
            <li>
              J'ai réalisé une étude sur la propriété intellectuelle (marque et
              conception)
            </li>
            <li>une étude sur le fonctionnement</li>
            <li>
              Une proposition d'un modèle compacte moderne recyclé avec écran et
              d'un autre en bois piloté par application mobile.
            </li>
            <li>
              Une recherche de partenaires pour la conception du prototype...
            </li>

            <img src={estamp} alt="projet tampon numérique" />
          </ul>
        </div>
        <div className="content"></div>
      </div>
    </section>
  );
};
