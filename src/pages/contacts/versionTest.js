import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Merci = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 15000);

    if (countdown === 0) {
      navigate("/"); // 👉 redirection automatique vers l’accueil
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="container py-5 text-center">
      <h1 className="text-success">✅ Merci !</h1>
      <p>Votre message a bien été envoyé. Nous vous contacterons rapidement.</p>
      <p>
        Vous serez redirigé vers l’accueil dans{" "}
        <strong>{countdown}</strong> secondes...
      </p>
      <a href="/" className="btn btn-primary mt-3">
        Retour immédiat
      </a>
    </div>
  );
};

export default Merci;