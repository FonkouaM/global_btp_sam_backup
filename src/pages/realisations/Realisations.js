import React, { Fragment } from "react";
import { Typewriter } from "react-simple-typewriter";
// import Oeuvre1 from '../../assets/img/building-new-concrete-houses.jpg'
// import Oeuvre2 from '../../assets/img/construction-site-4020496_1280.jpg'
// import Oeuvre3 from '../../assets/img/heavy-machines-construction-workers-working-building.jpg'
// import Oeuvre4 from '../../assets/img/construction-collective.jpg'



const Realisations = () =>{
    return(
    <Fragment>
        <div className="dark_page full-page" id="realisation-page">
            <div className='content_container_card card_container'>
                <div className='container global_container'>
                    <h5>NOS REALISATIONS</h5>
                    {/* <h1>QUELQUES CLICHETS DE NOS REALISATIONS</h1> */}
                    <div className='content_card'>
                        {/* <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={Oeuvre1} width='620' height='480' className="img-fluid rounded-start" alt="source"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Batiment R2</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <br></br> */}
                        {/* <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Batiment R4</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={Oeuvre2} width='620' height='480' className="img-fluid rounded-start" alt="source"/>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={Oeuvre3} width='620' height='480' className="img-fluid rounded-start" alt="source"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Batiment R2</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <br></br> */}
                        <div className="card mb-3">
                            <div className="row g-0">
                                {/* <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Batiment R4</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div> */}
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
                                {/* <div className="col-md-4">
                                    <img src={Oeuvre4} width='620' height='480' className="img-fluid rounded-start" alt="source"/>
                                </div> */}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default Realisations