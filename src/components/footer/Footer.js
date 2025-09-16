import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo/logoblack.png'
import Whatsapp from '../../assets/icon/whatsapp.png'
import Facebook from '../../assets/icon/facebook.png'
import Telegram from '../../assets/icon/telegram.png'
import Snapchat from '../../assets/icon/snapchat.png'
import './footer.styles.css'


const Footer = () =>{
    return(
        <Fragment>
            <footer  className="section-footer bt-footer" id="footer">
                <div  className="footer-bg">
                    <div className="footer-logo">
                        <Link className="link_to" to="/"><img src={Logo} alt="Logo" /></Link>
                        <p>Faites-vous assister par nos agents.</p>
                    </div>
                <div className="lien_utile">
                    <h4>Liens utiles</h4>
                        <Link className="link_to" to="/">Accueil</Link>
                        <Link className="link_to" to="/contact">Contacts</Link>
                        <Link className="link_to" to="/services">Services</Link>
                        <Link className="link_to" to="/realisations">Nos realisations</Link>
                </div>
                <div className="formation">
                <h4>Nos services</h4>
                    <Link className="link_to" to="/services">Construction légère</Link>
                    <Link className="link_to" to="/services">Rénovation de domiciles</Link>
                    <Link className="link_to" to="/services">Petits aménagements extérieurs</Link>
                    <Link className="link_to" to="/services">Entretien pour particuliers et petites entreprises</Link>
                        </div>
                        <div className="contact">
                            <h4>Contact</h4>
                            {/* <p>BP</p> */}
                            <p>Douala, Yassa</p>
                            <p>Cameroun</p>
                            <br/>
                            <p><b>Phone:</b> <a href="tel:+237 6 86 43 93 94">+237 6 86 43 93 94</a></p>
                            <p><b>Email: </b>
                                <a href="mailto:globalbtpsm@gmail.com">globalbtpsm@gmail.com</a>
                            </p>

                            <div className="footer__socials">
                                <a className="link_to" href="https://wa.me/237686439394" target="_blank" rel="noreferrer noopener">
                                    <img src={Whatsapp} width='30' height='30' alt="Whatsapp"/>
                                </a>
                                
                                <a className="link_to" href="https://www.facebook.com/share/p/16bmfum2uo/" target="_blank" rel="noreferrer noopener">
                                    <img src={Facebook} width='30' height='30' alt="Facebook"/>
                                </a>
                                
                                <a className="link_to" href="http://t.me/globalbtp_sm" target="_blank" rel="noreferrer noopener">
                                    <img src={Telegram} width='30' height='30' alt="Telegram"/>
                                </a>
                                
                                <a className="link_to" href="https://www.snapchat.com/add/globalbtpsm?share_id=yzwVGxcaCzQ&locale=fr-FR" target="_blank" rel="noreferrer noopener">
                                    <img src={Snapchat} width='30' height='30' alt="Snapchat"/>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="copyright">Global BTP service and managment © 2025 Developed by <span>KFM_Magdev</span></div>
            </footer>
        </Fragment>
    )
}

export default Footer