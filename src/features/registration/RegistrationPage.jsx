import { useEffect, useState } from "react";
import validateForm from "../../utils/validate-form";
import { motion } from "framer-motion";
import ResetLocation from "../../utils/ResetLocation";
import "./assets/register.css";
import { CAPTCHA_KEY, CAPTCHA_URL } from "../../data/constants";
const ENVIRONMENT = import.meta.env.MODE;
import { slideInLeft } from "../../utils/animations";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { createUser } from "./api/createUser";
const initialFormValue = {
  id: "",
  email: "",
  password: "",
  repeatPassword: "",
  fullname: "",
  address: "",
  number: "",
};
const RegistrationPage = ({ activateLoginModal }) => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [registrationFail, setRegistrationFail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const captchaRef = useRef();
  useEffect(() => {
    document.title = "Registrarse | Es hora de pizza";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    ResetLocation();
    setFormError(validate(formValue));
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    }

    const isCaptchaValid = await verifyCaptcha();
    if (!isCaptchaValid.success) {
      setLoading(false);
      setSubmit(false);
      setCaptchaError(isCaptchaValid.message);
      return;
    }
    let currForm = { ...formValue };
    if (currForm.repeatPassword.length > 0) {
      delete currForm.repeatPassword;
    }
    if (currForm.address !== undefined) {
      delete currForm.address;
    }
    if (currForm.number !== undefined) {
      delete currForm.number;
    }
    currForm.email = currForm.email.toLowerCase();
    const response = await createUser(currForm);
    if (!response.success) {
      setRegistrationFail(true);
      setSubmit(false);
    } else {
      setRegistrationFail(false);
      setSubmit(true);
    }
    setLoading(false);
    setCaptchaError("");
    setFormValue(initialFormValue);
  };
  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("registration");

  const verifyCaptcha = async () => {
    let token = captchaRef.current?.getValue();
    if (token.length === 0) {
      captchaRef.current?.reset();
      return { success: false, message: "reCaptcha" };
    }
    try {
      const response = await fetch(CAPTCHA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) {
        throw new Error(response.message);
      }
      return { success: true };
    } catch (error) {
      if (ENVIRONMENT === "development") console.log("Error en verifyCaptcha:", error.message);
      return { success: false, message: "Fallo del servidor" };
    } finally {
      captchaRef.current?.reset();
    }
  };
  return (
    <motion.main
      className="register"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>{submit && Object.keys(formError).length === 0 ? "Conseguido!" : "Registrarse"}</h2>
      {loading ? (
        <div role="status" className="loader">
          <p>Ya casi estamos...</p>
          <img
            alt="Proceso de carga"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      ) : submit && Object.keys(formError).length === 0 ? (
        <section className="register__success">
          <p>¡Ya puede iniciar sesión y realizar un pedido!</p>
          <button
            className="passive-button-style txt-white"
            onClick={() => {
              ResetLocation();
              activateLoginModal();
              setSubmit(false);
            }}
            aria-label="Iniciar sesion">
            Iniciar sesion
          </button>
        </section>
      ) : (
        <form className="register__form" onSubmit={handleSubmit}>
          {registrationFail && <p className="register__error">Hemos visto que no estas registrado!</p>}
          <label htmlFor="fullname" className="register__form__field">
            Nombre completo
            <input
              id="fullname"
              type="text"
              placeholder="Ingresa tu nombre completo"
              name="fullname"
              value={formValue.fullname}
              onChange={updateForm}
              aria-labelledby="fullname-error"
            />
          </label>
          <span id="fullname-error" aria-live="polite" className="register__error">
            {formError.fullname}
          </span>

          <label htmlFor="email" className="register__form__field">
            Correo electronico
            <input
              id="email"
              type="text"
              placeholder="Ingresa correo (e.g., name@example.com)"
              name="email"
              value={formValue.email}
              onChange={updateForm}
              aria-labelledby="email-error"
            />
          </label>
          <span id="email-error" aria-live="polite" className="register__error">
            {formError.email}
          </span>
          <label htmlFor="password" className="register__form__field">
            Contraseña
            <input
              id="password"
              type="password"
              placeholder="Crear una contraseña"
              name="password"
              value={formValue.password}
              onChange={updateForm}
              aria-labelledby="password-error"
            />
          </label>
          <span id="password-error" aria-live="polite" className="register__error">
            {formError.password}
          </span>
          <label htmlFor="repeatPassword" className="register__form__field">
            Repite la contraseña
            <input
              id="repeatPassword"
              type="password"
              placeholder="Repite la contraseña"
              name="repeatPassword"
              value={formValue.repeatPassword}
              onChange={updateForm}
              aria-labelledby="repeatPassword-error"
            />
          </label>
          <span id="repeatPassword-error" aria-live="polite" className="register__error">
            {formError.repeatPassword}
          </span>
          <label htmlFor="address" className="register__form__field">
            Direccion
            <input
              id="address"
              type="text"
              placeholder="Ingresa tu direccion (opcional)"
              name="address"
              value={formValue.address}
              onChange={updateForm}
              aria-labelledby="address-error"
            />
          </label>
          <span aria-live="polite" id="address-error" className="register__error">
            {formError.address}
          </span>
          <label htmlFor="number" className="register__form__field">
            Numero de telefono
            <input
              id="number"
              type="text"
              placeholder="Ingresa tu numero de telefono (opcional)"
              name="number"
              value={formValue.number}
              onChange={updateForm}
              aria-labelledby="number-error"
            />
          </label>
          <span aria-live="polite" id="number-error" className="register__error">
            {formError.number}
          </span>
          <p className="terms-warning register__form__terms">
            Al hacer clic en «Registrarse», aceptas nuestros <Link to="/terms">Terminos</Link> y{" "}
            <Link to="/privacy">Politicas de Privacidad</Link>. Es posible que reciba una notificación por correo electrónico de nuestra parte y puede darse de baja en cualquier
            momento.
          </p>
          <ReCAPTCHA ref={captchaRef} sitekey={"6LcvQPArAAAAAHEDDICAJiI2g6K9wQ8qakI2pajn"} theme="dark" aria-describedby="captcha-error" />
          <span className="captcha-input-validation-error" aria-live="assertive" id="captcha-error">
            {captchaError}
          </span>
          <button className="register__submit" type="submit" aria-label="Sign up">
            Registrarse
          </button>
        </form>
      )}
    </motion.main>
  );
};

export default RegistrationPage;

