import React, { useState, useEffect } from 'react';
import { Scotch } from '../commons/Scotch';

export const SectionPortefolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="POR" className="portefolio bg-dotted">
      <h2>PORTEFOLIO</h2>
      <section className="separator"></section>
      <section className="onceagain">
        <div className="column image"></div>

        <div className="column content">
          <Scotch
            className=""
            on="desktop"
            text={'OnceAgain.fr'}
            angle={-3}
            size={'long'}
            style={{ marginLeft: '4rem' }}
          />
          *
          <div className="title">
            Le site ONCEAGAIN.fr : plus de fonctinnalités et mise à jour du
            thème
          </div>
          <p>
            "J'ai eu la chance de travailler pour le site OnceAgain.fr, mes
            missions on consisté à étendre une limitation de Shopify. Cela a pu
            êtr epossible en combinant JAVASCRIPT à au langage LIQUID. Puis il a
            fallut créer une page de produit sur mesure avec son filtre intégré.
            Une fois la mission achevé nous avons pu réaliser d'autres tâches."
          </p>
          <ul>
            <li>
              Implémentation d'une page de produit avec son filtre de produits
              personnalisé : Il a fallut apprendre LIQUID et le combiner avec du
              JAVASCRIPT pour pouvoir étendre les capacités du site.
            </li>
            <li>
              Mise à jour de la charte graphique et du thème en langage
              <i>"Liquid"</i> en suivant les spécifités d'une graphiste.
            </li>
            <li>
              Ajout de fonctionnalités (page compte client avec un wallet, des
              points bonus etc...
            </li>
          </ul>
        </div>
      </section>
      <section className="separator"></section>
      <section className="rca rca-1">
        <div className="column image"></div>

        <div className="column content">
          <Scotch
            className=""
            on="desktop"
            text={'RCA (fabricant de tampons)'}
            angle={1}
            size={'long'}
            style={{ marginLeft: '4rem' }}
          />

          <div className="title">
            {' '}
            Création d'une application nommée : "XPsuite 2017"
          </div>
          <p>
            "En travaillant chez RCA, j'ai eu envie de mettre en place des
            procédures, des outils et des projets... J'ai commencé avec un tout
            petit projet : un programme en VB.net qui enregistre les n°de
            commandes recues par fax pour éviter les doublons de commandes.
            <br></br>Puis mon responsable m'a confié une demande plus
            conséquente : un logiciel d'enregistrement, de suivi et d'archivage
            des commandes pour les différents client de la société. De la est né
            le projet VB.Net : XPSuite 2017. Une version WEB en local était
            prévue en PHP..."
          </p>
          <ul>
            <li>L'application XPsuite est mon 1er projet VB.Net complet.</li>
            <li>
              L'application XPsuite permet d'enregistrer les numéros de
              commandes des expéditions.
            </li>
            <li>
              XPSuite permet de regrouper les expeditions différentes pour des
              clients identiques
            </li>
            <li>Une sauvegarde au format XML.</li>
            <li>
              Possibilité d'imprimer une journée d'éxpéditions ou enregistrer au
              format PDF.
            </li>
            <li>
              Possibilité d'effectuer des recherches par date et par n°
              expédition.
            </li>
            <li>Intégration d'un installateur InnoSetup</li>
          </ul>
        </div>
      </section>{' '}
      <section className="separator"></section>
      <section className="rca rca-2">
        <div className="column image"></div>

        <div className="column content">
          <div className="title">Le PROJET de E-STAMP (Tampon numérique)</div>
          <p>
            "Avant la fermeture de l'entreprise, j'avais travaillé sur un projet
            de taille : un "tampon numérique. J'ai étudié la faisabilité,
            prototypé en 3D avec Blender, j'ai étudié les brevets, recherché des
            partenaires... "
          </p>

          <ul>
            <li>
              Le projet de tampon se déclinait de plusieurs façons :
              <ul>
                <li>
                  La finition en bois ou en plastique noir recyclé (et logo led
                  vert).
                </li>
                <li>
                  Une version avec écran tactile application par pression et une
                  sans écran piloté par mobile.
                </li>
                <li>
                  Une version avec un Raspberry et une version avec Arduino.
                </li>
              </ul>
            </li>

            <li>Réalisation de vues en 3D.</li>
            <li>Montage d'un dossier sur la propriété intellectuelle.</li>
            <li>
              Recherche de partenaires pour la partie mécanique, la partie
              électronique, la partie logicielle.
            </li>
            <li>
              Le projet touche les client comme les ambassades qui utilisent de
              nombreux tampons à la fois (cela prend de la place, du cout, du
              CO2 etc... 10 ou 20 tampons en 1 seul).
            </li>
            <li>
              Le projet permet de gérer informatiquement ses tampons de puis une
              application en ligne ou desktop avec un format de tampons
              numériques dédié (.pni).
            </li>
            <li>plus de délai de commande et réception.</li>
            <li>
              Le projet permet de toucher plus de client comme pour le
              scrapbooking ou autres...
            </li>
          </ul>
        </div>
      </section>
      <section className="separator"></section>
    </section>
  );
};
