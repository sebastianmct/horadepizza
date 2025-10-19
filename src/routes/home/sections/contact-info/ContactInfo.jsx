import "./assets/contact-info.css";
import { motion } from "framer-motion";
import PizzaOne from "./assets/image-one-parallax.webp";

const ContactInfo = () => {
  return (
    <section className="homepage__company-info flex-container flex-row txt-white" aria-describedby="contact-title">
      <h2 id="contact-title" className="visually-hidden">
        Contactanos
      </h2>
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 300 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 200 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <motion.img
        initial={{ opacity: 0, right: 50 }}
        whileInView={{ opacity: 0.8, right: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <address className="company-info__details">
        <ul>
          <li>
            <h3>
              <a href="tel:0000001234567">(+56 9) 1234 4567</a>
            </h3>
            <p>Contacta con nosotros si tienes dudas</p>
          </li>
          <li>
            <h3>Avenida Alberto Fuentes</h3>
            <p>Santiago, Chile</p>
          </li>
          <li>
            <h3>Abierto de lunes a sabado!</h3>
            <p>
              <time dateTime="8:00">8:00</time>am - <time dateTime="21:00">9:00</time>pm
            </p>
          </li>
        </ul>
      </address>
    </section>
  );
};

export default ContactInfo;

