import React, { Fragment } from "react";
import { Typewriter } from "react-simple-typewriter";
import BgRealisation from "../../assets/img/blueprint.jpg";
const Realisations = () => {

  return (
    <Fragment>
      <div className="dark_page full-page" 
        id="realisation-page"
        style={{ backgroundImage: `url(${BgRealisation})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', }}>
        <div className="content_container_card card_container">
          <div className="container global_container">
            <h5>NOS REALISATIONS</h5>

            <div className="content_card">
              {/* Exemple d’utilisation des images si tu veux les réactiver */}
              {/* 
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Oeuvre1} width="620" height="480" className="img-fluid rounded-start" alt="Oeuvre 1"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Batiment R2</h5>
                      <p className="card-text">
                        Description de la réalisation...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              */}

              <div className="card mb-3">
                <div className="row g-0">
                  <div className="typed-text" style={{ color: "#ffffff" }}>
                    <Typewriter
                      words={["Nos réalisations sont en cours de mise à jour..."]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={40}
                      deleteSpeed={70}
                      delaySpeed={1000}
                    />
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Realisations;
