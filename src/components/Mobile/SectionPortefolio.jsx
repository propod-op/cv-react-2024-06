import { Scotch } from '../Scotch'
import portefolio from '../../assets/images/portefolio-onceagain.jpg'
import estamp from '../../assets/images/projet-estamp.png'
import xpsuite from '../../assets/images/projet-xpsuite.png'

export const SectionPortefolio = () => {
    return (
        <section id="POR" className="portefolio">
            <h2>PORTEFOLIO</h2>
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
                        « J'ai eu la chance de travailler avec l'équipe de
                        OnceAgain.fr ...»
                        <br />
                    </h3>
                    <h4> mes missions</h4>

                    <ul>
                        <li>
                            Création d'une page de produits avec son filtre de
                            produits.
                        </li>
                        <li>Mise à jour de la charte graphique</li>
                        <li>Ajout de fonctionnalités</li>
                    </ul>
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
                        « J'ai réalisé quelques applications VB.Net pour
                        l'entreprise de tampons pour laquelle je travaillais.»
                    </h3>
                    <h4>Réalisations</h4>
                    <ul>
                        <li>
                            J'ai commencé par des macro VB dans CorelDraw,
                            automatisant des taches associées à des raccourcis
                            clavier.
                        </li>
                        <li>
                            Puis XPsuite, une application de gestion des
                            expéditions.
                            <br />
                            (Parmis ses fonctionnalités, la possibilité
                            d'imprimer en PDF le tableau des expéditions de la
                            semaine).
                        </li>

                        <li>
                            J'ai commencé une étude de faisabilité d'un produit
                            encore inexistant : <br />
                            <b>le tampon numérique.</b>
                            <br />
                            <br />
                            Etude sur la propriété intellectuelle (marque et
                            conception), étude sur le fonctionnement,
                            proposition d'un modèle compacte moderne recyclé
                            avec écran et d'un autre en bois piloté par
                            application mobile. Recherche de partenaires pour la
                            conception du prototype...
                        </li>
                        <img src={estamp} alt="projet tampon numérique" />
                    </ul>
                </div>
                <div className="content"></div>
            </div>
        </section>
    )
}
