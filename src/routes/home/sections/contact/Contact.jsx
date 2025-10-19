import "./contact.css";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Maps = lazy(() => import("./Maps"));

const Contact = () => {
  const ref = useRef(null);
  const [hideMap, setHideMap] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHideMap(false);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <motion.section
      aria-labelledby="contact-title"
      className="homepage__contact flex-container flex-column"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {!hideMap && (
        <Suspense fallback={<div id="#map">Loading location...</div>}>
          <Maps />
        </Suspense>
      )}
      <address className="contact__info">
        <h2 id="contact-title">Contact Us</h2>
        <p>¿Tienes alguna pregunta, sugerencia o simplemente quieres saludarnos? ¡Nos encantaría saber de ti!</p>
        <div>
          <h3>Soporte:</h3>
          <p>Nuestro equipo de atención al cliente está a su disposición para ayudarle con cualquier consulta que pueda tener.</p>
          <ul>
            <li>
              - Correo: {""}
              <a href="mailto:supporteshorapizza@hotmail.com" target="_blank" rel="noopener noreferrer">
                supporteshorapizza@hotmail.com
              </a>
            </li>
            <li>
              - <a href="tel:0000001234567">Numero: (+56 9) 1232 4567</a>
            </li>
            <li>
              - Horarios: Lunes - Sabado, <time dateTime="08:00">8:00am</time> - <time dateTime="21:00">9:00pm</time>(EST)
            </li>
          </ul>
        </div>
        <div>
          <h3>Consultas generales:</h3>
          <p>
            Para preguntas generales sobre nuestros productos, servicios o cualquier otra información, no dude en contactarnos.
          </p>
          <ul>
            <li>
              - Correo: {""}
              <a href="mailto:infoeshorapizza@hotmail.com" target="_blank" rel="noopener noreferrer">
                infoeshorapizza@hotmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Comentarios y sugerencias:</h3>
          <p>
            Valoramos sus comentarios y siempre nos esforzamos por mejorar. Si tiene alguna sugerencia, comentario o idea
            sobre cómo podemos mejorar nuestros servicios, no dude en comunicárnoslo.
          </p>
          <ul>
            <li>
              - Correo: {""}
              <a href="mailto:feedback@pizzatime.com" target="_blank" rel="noopener noreferrer">
                infoeshorapizza@hotmail.com
              </a>
            </li>
          </ul>
        </div>
      </address>
    </motion.section>
  );
};

export default Contact;

