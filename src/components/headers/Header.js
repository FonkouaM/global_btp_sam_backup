import React, { Fragment, useEffect, useState } from 'react'
import ReactTyped from 'react-typed'
import Navbar from '../navbar/Navbar'
import './header.styles.css'
import caroussel1 from '../../assets/img/working-hard-building-man-construction-worker.jpg'
import caroussel2 from '../../assets/img/architecture.jpg'
import caroussel3 from '../../assets/img/heavy-machines-construction-workers-working-building.jpg'
import caroussel4 from '../../assets/img/building-new-concrete-houses.jpg'
import caroussel5 from '../../assets/img/construction-collective.jpg'


const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    caroussel1,
    caroussel2,
    caroussel3,
    caroussel4,
    caroussel5,
    // Ajoutez plus d'images ici
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(intervalId);
  },[currentIndex, images.length]);
    
  return (
    <Fragment>
      <Navbar/>
      <div className="header-wrapper caroussel">
        <div className="caroussel-inner" style={{transform: `translateX(-${currentIndex * 100}%)`,}}>
          {images.map((image, index) => (
            <div key={index} className="caroussel-item">
              <img src={image} alt={`img ${index + 1}`}/>
              <div className='main-info'>
                <h1>GLOBAL BTP SERVICE AND MANAGMENT</h1>
                <ReactTyped
                  className='typed-text'
                  strings={['Travaux de construction', 'rénovation', 'aménagement', 'petite voirie', 'gestion de projets BTP']}
                  typeSpeed={40}
                  backSpeed={70}
                  loop
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Header