import React, { Fragment, useEffect, useState } from 'react';
import { Typewriter } from "react-simple-typewriter";
import Navbar from '../navbar/Navbar';
import './header.styles.css';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images depuis public/assets/img
  const images = [
    '/assets/img/hard_building.jpg',
    '/assets/img/architecture.jpg',
    '/assets/img/machines_building.jpg',
    '/assets/img/new_houses.jpg',
    '/assets/img/new_construction.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

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
