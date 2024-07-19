import React, { useState, useEffect } from 'react';
import { Scotch } from '../commons/Scotch';

export const SectionPortefolio = () => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="POR" className="portefolio bg-dotted">
      <h2>PORTEFOLIO</h2>
      <section className="separator"></section>
      <div className="introduction">
        <ul>
          <li>
            Dans cette partie je vais vous montrer mon cycle d'évolution en
            terme de projets des plus récents, au premiers pas avec le code.
          </li>
          <li>
            Tout les projets précédent la période chez RCA sont des projets à
            l'état de prototypes, des idées et des exercices.
          </li>
          <li>
            Onceagain.fr a été ma 1ère expérience professionnelle en tant que
            développeur. J'y ai été très bien encadré et accueilli.
          </li>
        </ul>
        <br />
      </div>
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

          <div className="title">
            Le site ONCEAGAIN.fr : plus de fonctionnalités et mise à jour du
            thème
          </div>
          <p>
            "J'ai eu la chance de travailler pour le site OnceAgain.fr, mes
            missions on consistées à étendre une limitation de Shopify (fetch
            natif de maximum 5000 produits, nous avions besoin de fetcher + de
            100 000 produits). Cela a été rendu possible en combinant JAVASCRIPT
            au langage LIQUID. Puis il a fallut créer une page de produits sur
            mesure avec son filtre intégré. Une fois la mission achevé nous
            avons pu réaliser d'autres tâches."
          </p>
          <ul>
            <li>
              Implémentation d'une page de produit avec son filtre de produits
              personnalisé : Il a fallut apprendre LIQUID et le combiner avec du
              JAVASCRIPT pour pouvoir étendre les capacités du site.
            </li>
            <li>
              Mise à jour de la charte graphique et du thème en langage
              <i>"Liquid"</i> en suivant les spécificités d'une graphiste.
            </li>
            <li>
              Ajout de fonctionnalités (page compte client avec un wallet, des
              points bonus etc...
            </li>
            <li>
              Intégrer des vignettes de pub parmis les vignettes de produits..
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
            Création d'une application nommée : "XPsuite 2017"
          </div>
          <p>
            "En travaillant chez RCA, j'ai eu envie de mettre en place des
            outils (comme une base de données de produits et de procédures
            commune à l'entreprise) , des projets... J'ai commencé avec un tout
            petit projet : un programme en VB.net qui enregistre les n° de
            commandes recues par fax pour éviter les doublons de commandes.
            <br></br>Puis mon responsable m'a confié une demande plus
            conséquente : un logiciel d'enregistrement, de suivi et d'archivage
            des commandes pour les différents clients de la société. De là est
            né le projet VB.Net : XPSuite 2017. Une version WEB en local était
            prévue plus tard en PHP..."
          </p>
          <ul>
            <li>L'application XPsuite est mon 1er projet VB.Net complet.</li>
            <li>
              L'application XPsuite permet d'enregistrer les numéros de
              commandes avec le n° de client et la date.
            </li>
            <li>
              XPSuite permet de regrouper les expeditions différentes pour des
              clients identiques.
            </li>
            <li>
              Une sauvegarde des données au format XML (un fichier par jour).
            </li>
            <li>
              Possibilité d'imprimer une période (journée/semaine) d'expéditions
              ou enregistrer au format PDF.
            </li>
            <li>
              Possibilité d'effectuer des recherches par date et par n°
              expédition.
            </li>
            <li>Intégration d'un installateur InnoSetup</li>
          </ul>
        </div>
      </section>

      <section className="separator"></section>
      <section className="rca rca-2">
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
          <div className="title">Le PROJET de E-STAMP (Tampon numérique)</div>
          <p>
            "Avant la fermeture de l'entreprise, j'ai travaillé sur un projet de
            taille : un "tampon numérique". J'ai étudié la faisabilité,
            prototypé en 3D avec Blender, étudié les brevets, recherché des
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
                  2 versions auraient été possiblement déclinées : une avec un
                  Raspberry et une version avec Arduino. Le Pi est plus puissant
                  mais arduino démarre plus vite. J'avais fait appel au Labo
                  d'Orléans pour cette partie.
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
              Le projet touche les clients comme les ambassades qui utilisent de
              nombreux tampons à la fois (cela prend de la place, du cout, du
              CO2 etc... 10 ou 20 tampons en 1 seul). il touche aussi de
              nouveaux clients comme les amateurs de scrapbooking
            </li>
            <li>
              Une application en ligne ou desktop aurait permis de gérer les
              trampons numériques avec un format de tampons numériques dédié
              (.pni).
            </li>
            <li>
              Fini les délais de commande et réception. Facturation directe.
            </li>
          </ul>
        </div>
      </section>
      <section className="separator"></section>

      <section className="rca java-1">
        <div className="column image"></div>

        <div className="column content">
          <Scotch
            className=""
            on="desktop"
            text={'Projet JAVA'}
            angle={1}
            size={'long'}
            style={{ marginLeft: '4rem' }}
          />

          <div className="title">
            un outil de surveillance des températures écrit en JAVA.
          </div>
          <p>
            "J'ai découvert le Raspberry Pi et l'Arduino. Du coup on a pensé à
            un outil d'enregistrement de températures dont le but était de
            prévenir les gelées. Je ne connassais pas encore les API, ce que
            j'ai appris a l'école ensuite. J'ai adapté le principe plus tard
            avec Retool et une source de données d'une API météo avec des
            prévisions sur 1 semaine avec les probabilités de gélées (API
            MeteoConcept)."
          </p>
          <ul>
            <li>
              Un serveur LAMP et JAVA JRE sont installés sur le Raspberry Pi.
            </li>
            <li>
              Lecture de la valeur d'une Sonde 18DS20 depuis le Raspberry Pi,
              puis enregistrement des températures dans la base de données
              MariaDB avec un service JAVA.
            </li>
            <li>
              Le serveur LAMP héberge les températures (base MariaDB) et affiche
              le graphique via PHP et ChartJS.
            </li>
            <li></li>
            <li>Le service JAVA (.jar) est enregistré au redémarrage du Pi</li>
          </ul>
        </div>
      </section>
      <section className="separator"></section>
      <section className="perso-1">
        <div className="column content">
          {' '}
          <Scotch
            className=""
            on="desktop"
            text={'Projets divers VB.net'}
            angle={1}
            size={'long'}
            style={{ marginLeft: '4rem' }}
          />
          <div className="title">De nombreuses idées de projets VB.Net...</div>
          <p>
            "J'ai eu de nombreuses idées inabouties au cours de mes débuts avec
            VB.Net. Elles m'ont permis de m'exercer. Je ne connaissais pas
            encore GITHUB. Heureusement j'ai découvert GITHUB à l'école et
            désormais j'archive mes codes."
          </p>
          <ul>
            <li>
              <i>
                <b>IFFA (Instant fonts for All)</b>
              </i>
              était une application qui synchronisaient les polices d'écriture
              des postes clients d'un service PAO à l'aide d'un dossier
              surveillé. Les polices ajoutées dans le dossier surveillé sur le
              réseau (FileSystemWatcher), il les ajoutaient sur les autres
              postes clients du service PAO. De même pour la suppression d'une
              police. Aucune application du genre n'existait. ps : dans ce cas
              un FileSystemWatcher est utilisé mais un fichier .polices
              accompagnant le flow de projets CorelDraw par exemple, auraient pu
              être une autre façon de procéder à étudier ?...
            </li>
            <li>
              <i>
                <b>Propod TimeCounter </b>
              </i>
              est un outil de devis que j'avais prototypé directement dans
              VB.net car je ne connaissais pas encore Figma (heureusement j'ai
              appris également cela à la WildCodeSchool). Il se présentait sous
              forme d'icône dans la barre des tâches (un serviceController)
              <br />
              <b>Fonctionnement :</b> à l'aide d'un menuStrip rapide, une
              nouvelle prestation est sélectionnée (ex: 'Création d'une
              illustration' ou 'Création de Bon à tirer'), la prestation
              correspond à un taux horaire. On peut démarrer et arrêter un
              chronomètre puis on valide la prestation. A la fin on obtient un
              devis réalisé automatiquement en PDF. Biensur on pouvait gérer les
              prestations et les devis générés.
            </li>
            <li>
              <i>
                <b>PhotoBag </b>
              </i>
              Un peu comme Xnview. on pouvait répertorier des images et détecter
              des doublons. Le principe est de comparer un échantillon des
              images sur un carré an haut à gauche de 128x128px par exemple.
              Rapide pour comparer et suffisant.
            </li>
          </ul>
        </div>

        <div className="column content">
          <Scotch
            className=""
            on="desktop"
            text={'Les 1ers projets WEB'}
            angle={1}
            size={'long'}
            style={{ marginLeft: '4rem' }}
          />

          <div className="title">
            J'ai réalisé quelques sites, puis mes 1ères applications
            client/serveur.
          </div>
          <p>
            "Après le applications VB.net j'ai compris l'intérêt de réaliser des
            applications client/serveur en PHP qui évitent les mise à jour et
            les installations parfois difficle à l'échelle d'une entreprise."
          </p>
          <ul>
            <li>
              <i>
                <b>Le site ASC-ING.fr</b>
              </i>
              &nbsp;est un site pour une ingénierie de video-surveillance. PHP +
              Bootstrap. Je ne connaissait pas encore Flex.
            </li>
            <li>
              <i>
                <b>Statera-vita.fr </b>
              </i>
              est mon 1er site en PHP suis je puis dire. J'ai suivi les
              spécifications graphiques de la cliente qui ne souhaitait pas
              utiliser WordPress.
            </li>
            <li>
              <i>
                <b>Passionkoi28.com </b>
              </i>
              Un site Prestashop. Je ne connaissais pas encore Flex. Un site un
              peu "improvisé". tout a été implémenté au fur et à mesure. Un
              refactoring est bientot prévu pour le graphisme.
            </li>
            <li>
              <i>
                <b>Onceagain.fr </b>
              </i>
              J'ai commencé un projet d'outil tiers a shopify en NodeJS. Avec
              une clé API d'accès Shopify une extension permettant d'éffectuer
              des "tâches maisons" comme des taches CRON etc...
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
