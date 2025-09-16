import React, { Fragment } from "react";
import Icon1 from '../../assets/icon/workers.png'
import Icon2 from '../../assets/icon/construction.png'
import Icon3 from '../../assets/icon/pickaxe.png'
import Icon4 from '../../assets/icon/sketch.png'
import Icon5 from '../../assets/icon/road.png'
import Icon6 from '../../assets/icon/brickwall.png'

const Service = () =>{
    return(
        <Fragment>
            <div className="dark_page full-page" id="service-page">
                <section className="section_services" id="services">
                    <span className="section-subtitle">GLOB-sm</span>
                    <h2 className="section-title">Nos services</h2>

                    <div className="services__container bd-grid">
                        <div className="services__content">
                            <img className="services__icon" src={Icon1} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Location de matériel léger de BTP</h3>
                            <p className="services__description"> bétonnière, échafaudages, etc.</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon2} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Rénovation d’immeubles et maisons</h3>
                            <p className="services__description"> peinture, carrelage, plomberie, électricité de base</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon3} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Petite voirie urbaine et rurale</h3>
                            <p className="services__description"> pistes, caniveaux</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon4} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Études techniques et gestion de projets BTP</h3>
                            <p className="services__description"> planning, budget, suivi de chantier</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon5} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Construction de bâtiments</h3>
                            <p className="services__description"> logements, commerces, bureaux</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon6} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Aménagement extérieur</h3>
                            <p className="services__description"> clôtures, pavés, drainage, fosses, rigoles, jardins, etc.</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon4} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Études et conception</h3>
                            <p className="services__description"> Études techniques et économiques<br/>
                                                                - Plans architecturaux et modélisation 3D<br/>
                                                                - Études de faisabilité et topographie</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon5} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Rénovation et réhabilitation</h3>
                            <p className="services__description"> - Réfection de bâtiments anciens <br/>
                                                                - Travaux d’étanchéité et d’isolation<br/>
                                                                - Amélioration énergétique<br/>
                                                                - Reprise en sous-œuvre</p>
                        </div>

                        <div className="services__content">
                            <img className="services__icon" src={Icon6} width='30' height='30' alt="source"/>
                            <h3 className="services__title">Briquettes auto bloquant</h3>
                            <p className="services__description"> Fourniture et pose de briquettes* pour murs porteurs ou cloisons<br/>
                                                                - *Construction de murs en briquettes stabilisées* (BTC)<br/>
                                                                - *Montage de murs avec briquettes apparentes* pour effet décoratif<br/>
                                                                - *Création de cloisons intérieures en briquettes<br/>
                                                                - *Finition : rejointoiement, enduit terre/chaux compatible briquette*
                                                               </p>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Service