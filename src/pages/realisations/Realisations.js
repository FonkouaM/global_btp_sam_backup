import React, { Fragment } from "react";
import { Typewriter } from "react-simple-typewriter";

const Realisations = () => {
  return (
    <Fragment>
      <div className="dark_page full-page" 
           id="realisation-page"
           style={{ 
             backgroundImage: `url(/assets/img/blueprint.jpg)`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             width: '100%',
             height: '100vh',
           }}>
        <div className="content_container_card card_container">
          <div className="container global_container">
            <h5>NOS REALISATIONS</h5>

            <div className="content_card">
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
