import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div 
        className="dark_page full-page" 
        id="home-page"
        style={{ 
          backgroundImage: `url(/assets/img/home_entreprener.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
        }}>
        <div className="home global_container" id="home">
          <section className="project section">
            <div className="project__container bd-grid">
              <img src="/assets/icon/14345-removebg-preview.png" alt="Projets realises" className="project__img"/>
              <div className="project__data">
                <h2 className="section-title project__title">
                  Construisons l’avenir ensemble !
                </h2>
                <p className="project__description">
                  Découvrez nos solutions innovantes pour tous vos projets de construction et de rénovation.
                </p>
                <Link to="/contact" className="button button__light">Contactez-nous</Link>
              </div>
              <img src="/assets/icon/architech-removebg-preview.png" alt="Projets realises" className="project__img"/>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
