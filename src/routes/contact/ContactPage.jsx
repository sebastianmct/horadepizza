import "./assets/contact.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validate-form";
import ResetLocation from "../../utils/ResetLocation";
// CAPTCHA removido
const ENVIRONMENT = import.meta.env.MODE;
import { slideInLeft } from "../../utils/animations";
const ContactPage = () => {
  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  // const [captchaError, setCaptchaError] = useState("");
  // const captchaRef = useRef();
  const validate = validateForm("contact");
  useEffect(() => {
    document.title = "Contacto | Es hora de pizza";
  }, []);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      setSubmit(false);
      return;
    }
    // CAPTCHA removido: continuar sin verificación
    setSubmit(true);
    ResetLocation();
    setLoading(false);
    setFormValue({ fullname: "", email: "", message: "" });
    setCaptchaError("");
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  // CAPTCHA removido
  return (
    <motion.main
      className="contact"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      {loading ? (
        <section className="contact-loader">
          <h2>Ya casi llegamos...</h2>
          <img
            aria-hidden="true"
            alt=""
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </section>
      ) : submit && Object.keys(formError).length === 0 ? (
        <section className="contact__success-msg">
          <h2>Hemos recibido tu mensaje y te responderemos en breve</h2>
          <div>
            <Link className="active-button-style" to="/menu" aria-label="Go to menu">
              Ir al menú
            </Link>
            <button
              aria-label="Send message again"
              className="passive-button-style"
              type="button"
              onClick={() => {
                setSubmit(false);
              }}>
              Enviar otro mensaje
            </button>
          </div>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="flex-container flex-column">
          <h2>Mandar un mensaje</h2>
          <div className="webflow-style-input">
            <label htmlFor="fullname" className="visually-hidden">
              Nombre Completo
            </label>
            <input
              onChange={handleValidation}
              value={formValue.fullname}
              name="fullname"
              id="fullname"
              className="pop-font"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              aria-describedby="fullname-error"
            />
          </div>
          <span className="input-validation-error" aria-live="polite" id="fullname-error">
            {formError.fullname}
          </span>
          <div className="webflow-style-input">
            <label htmlFor="email" className="visually-hidden">
              Correo Electrónico
            </label>
            <input
              onChange={handleValidation}
              value={formValue.email}
              name="email"
              id="email"
              className="pop-font"
              type="text"
              placeholder="Email"
              autoComplete="email"
              aria-describedby="email-error"
            />
          </div>
          <span className="input-validation-error" aria-live="assertive" id="email-error">
            {formError.email}
          </span>
          <div className=" webflow-style-input">
            <label htmlFor="message" className="visually-hidden">
              Tu mensaje
            </label>
            <textarea
              onChange={handleValidation}
              value={formValue.message}
              name="message"
              id="message"
              className="pop-font"
              placeholder="Message"
              aria-describedby="message-error"
            />
          </div>
          <span className="input-validation-error" aria-live="assertive" id="message-error">
            {formError.message}
          </span>
          {/* CAPTCHA removido */}
          <button type="submit" className="active-button-style" aria-label="enviar mensaje">
            Enviar
          </button>
        </form>
      )}
      <div className="contact__cover"></div>
      <section className="contact__inner pop-font">
        <h3>Contactanos</h3>
        <p>
          ¿Tienes alguna pregunta o comentario? Nos encantaría saber de ti. Ya sea que quieras hacer un pedido especial,
          brindar comentarios sobre nuestro servicio o simplemente saludar, estamos aquí para ayudarte. Puedes contactarnos
          a través del formulario de contacto, enviarnos un correo electrónico a @eshortmail.com o llamarnos al +569 4564 7890.
        </p>
      </section>
    </motion.main>
  );
};

export default ContactPage;

