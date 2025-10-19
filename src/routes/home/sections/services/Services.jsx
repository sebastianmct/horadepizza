﻿import "./assets/services.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import companyServices from "./data/company-services";

const Services = () => {
  return (
    <section className="homepage__services">
      <h2 className="pop-font">Nuestros Servicios</h2>
      <p className="pop-font section-description">
       Es hora de pizza! Ofrecemos una variedad de servicios para mejorar tu experiencia culinaria, desde ingredientes organicos hasta entrega rapida y sabores inolvidables.
      </p>
      <ul className="services__items flex-container flex-column">
        {companyServices.map((service) => (
          <li key={service.id}>
            <Tilt className="services__item flex-container flex-column">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                }}
                width="50"
                height="50"
                src={service.img}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <div>
                <h3 className="pop-font">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </Tilt>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;

