import photo from '../../assets/images/presentation-right.png' 

export const SectionPresentation = () => {
    return (
        <section id="PRE" className="presentation bg-dotted">
            <h2>PRESENTATION</h2>
            <div className="photo"></div>
            <div className="content">
                <p className="hi">Hi everybody !</p>
                <p className="je-suis pm-1">
                    JE SUIS <span className="">OLIVIER</span>
                </p>
                <p>
                    Issu de 15 ans d’expérience dans l’imprimerie, j’ai décidé
                    de poursuivre mon parcours dans le domaine du numérique et
                    plus précisément en développement FRONT REACT
                </p>
                <br />
                Découvrons ensemble mon parcours et
                <br /> mes compétences...
            </div>
            <a href="#PAR" className="">
                <button className="pm-1">Suite ➜</button>
            </a>
        </section>
    )
}
