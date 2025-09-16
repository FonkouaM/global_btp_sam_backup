import React, { Fragment } from "react";

const About = () =>{
    return(
        <Fragment>
            <div className="dark_page full-page" id="about-page">
            <div className="global_container container py-5">
                <h1 className="mb-4">À propos de nous</h1>
                <h4 className="lead">Bienvenue sur notre site !</h4>
                <p>
                    Nous sommes une équipe passionnée par <strong>votre domaine</strong>.
                    Notre mission est de fournir des solutions innovantes et de qualité
                    pour aider nos clients à atteindre leurs objectifs.
                </p>

                <div className="row mt-5">
                    <div className="col-md-4">
                    <h4>Notre Vision</h4>
                    <p>
                        Construire un avenir meilleur grâce à l’innovation et à la
                        créativité.
                    </p>
                    </div>
                    <div className="col-md-4">
                    <h4>Nos Valeurs</h4>
                    <p>Intégrité, excellence et engagement envers nos clients.</p>
                    </div>
                    <div className="col-md-4">
                    <h4>Notre Équipe</h4>
                    <p>
                        Des professionnels expérimentés et passionnés travaillant ensemble
                        pour réussir.
                    </p>
                    </div>
                </div>
                </div>
            </div>
    </Fragment>
    )
}

export default About