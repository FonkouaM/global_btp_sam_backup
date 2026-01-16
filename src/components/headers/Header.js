import React, { Fragment, useEffect, useState } from 'react';
import { Typewriter } from "react-simple-typewriter";
import Navbar from '../navbar/Navbar';
import './header.styles.css';

// Images caroussel
import caroussel1 from '../../assets/img/hard_building.jpg';
import caroussel2 from '../../assets/img/architecture.jpg';
import caroussel3 from '../../assets/img/machines_building.jpg';
import caroussel4 from '../../assets/img/new_houses.jpg';
import caroussel5 from '../../assets/img/new_construction.jpg';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [caroussel1, caroussel2, caroussel3, caroussel4, caroussel5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);
console.log(caroussel1);

  return (
    <Fragment>
      <Navbar/>
      <header className="header-wrapper caroussel">
      <div className="caroussel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className="caroussel-item"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Texte fixe centré */}
      <div className="main-info">
    <h1>GLOBAL BTP SERVICE AND MANAGEMENT</h1>
    <div className="typed-text">
      <Typewriter
        words={[
          'Travaux de construction',
          'Rénovation',
          'Aménagement',
          'Petite voirie',
          'Gestion de projets BTP'
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1000}
      />
        </div>
      </div>
      </header>
    </Fragment>
  );
};

export default Header;
