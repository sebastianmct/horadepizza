import "./newsletter.css";
import { useState } from "react";
import validateForm from "../../../../utils/validate-form";

const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("newsletter");
  return (
    <section className="homepage__newsletter">
      <h2 className="newsletter__title">
        Suscribete a nuestro boletin para recibir las ultimas actualizaciones y ofertas especiales
      </h2>
      {submit && Object.keys(formError).length === 0 ? (
        <p className="newsletter__success">Subscripcion Completada</p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter__form">
          <div className="webflow-style-input">
            <label htmlFor="email" className="visually-hidden">
              Tu correo electronico
            </label>
            <input
              id="email"
              name="email"
              onChange={handleValidation}
              value={formValue.email}
              autoComplete="email"
              placeholder="Tu correo electronico?"
              aria-errormessage="email-error"
              aria-invalid={formError.email ? "true" : "false"}
            />
          </div>
          <span id="email-error" aria-live="assertive" className="newsletter__error">
            {formError.email}
          </span>
          <button type="submit" className="active-button-style" aria-label="Sign me up">
            Suscribirse
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;

