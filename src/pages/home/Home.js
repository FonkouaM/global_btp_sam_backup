import { Fragment } from "react"
import { Link } from "react-router-dom"
import Building from "../../assets/icon/14345-removebg-preview.png"
import HBuilding from '../../assets/icon/architech-removebg-preview.png'
const Home = () =>{
    return(
    <Fragment>
       <div className="dark_page full-page" id="home-page">
            <div className="home global_container" id="home">
                <section className="project section">
                    <div className="project__container bd-grid">
                        <img src={Building} alt="Projets realises" className="project__img"/>
                        <div className="project__data">
                            <h2 className="section-title project__title">Construisons l’avenir ensemble !</h2>
                            <p className="project__description">Découvrez nos solutions innovantes pour tous vos projets de construction et de rénovation.</p>
                            <Link to="/contact" className="button button__light">Contactez-nous</Link>
                        </div>
                        <img src={HBuilding} alt="Projets realises" className="project__img"/>
                    </div>
                </section>
            </div>
       </div>
    </Fragment>
    )
}

export default Home