import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // icône flèche vers le haut

const BackToTop = ({ reload = false }) => {
  const [visible, setVisible] = useState(false);

  // Montrer le bouton seulement après un certain scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // seuil 300px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll vers le haut
  const scrollToTop = () => {
    if (reload) {
      window.location.reload(); // recharge la page
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // scroll animé
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            backgroundColor: "#CC4B2C",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
          aria-label="Retour en haut"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
