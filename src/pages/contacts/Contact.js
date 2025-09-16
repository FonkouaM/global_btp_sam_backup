import React, { Fragment, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    civilite: "",
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Fragment>
      <div className="container py-5">
        <h1 className="mb-4">Contact</h1>
        <h5 className="mb-3">
          Laissez-nous un message via le formulaire ci-dessous :
        </h5>
        <p className="text-muted">
          Les champs suivis d'un symbole <span className="text-danger">*</span>{" "}
          sont obligatoires.
        </p>

        {/* 🚀 Envoi direct vers FormSubmit */}
        <form
          className="row g-3"
          action="https://formsubmit.co/globalbtpsm@gmail.com"
          method="POST"
        >
          {/* Champs cachés FormSubmit */}
          <input type="hidden" name="_next" value="https://ton-site.com/merci" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* Civilité */}
          <div className="col-12">
            <label className="form-label">
              Civilité <span className="text-danger">*</span>
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="civilite"
                  id="civiliteMme"
                  value="Mme"
                  checked={formData.civilite === "Mme"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="civiliteMme">
                  Mme
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="civilite"
                  id="civiliteM"
                  value="M."
                  checked={formData.civilite === "M."}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="civiliteM">
                  M.
                </label>
              </div>
            </div>
          </div>

          {/* Nom */}
          <div className="col-md-6">
            <label htmlFor="nom" className="form-label">
              Nom <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              E-mail <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Téléphone */}
          <div className="col-md-6">
            <label htmlFor="telephone" className="form-label">
              Téléphone (facultatif)
            </label>
            <input
              type="tel"
              className="form-control"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>

          {/* Objet */}
          <div className="col-md-6">
            <label htmlFor="objet" className="form-label">
              Objet de la demande <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="objet"
              name="objet"
              value={formData.objet}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Message <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Consentement RGPD */}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="consent">
                Je déclare être informé(e) que{" "}
                <strong>GLOBAL BTP SERVICES AND MANAGEMENT</strong> aura accès
                aux informations fournies pour répondre à ma demande.{" "}
                <span className="text-danger">*</span>
              </label>
            </div>
          </div>

          {/* Bouton */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;