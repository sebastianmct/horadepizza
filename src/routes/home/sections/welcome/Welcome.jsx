import "./assets/welcome.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from "./assets/section-one-375.webp";
import img700 from "./assets/section-one-700.webp";
import img1440 from "./assets/section-one-1440.webp";
import PizzaOne from "./assets/pizza-one-parallax.png";
import PizzaTwo from "./assets/pizza-two-parallax.png";
import { motion } from "framer-motion";
import { imageParentVariant, leftImageVariant, rightImageVariant } from "../../../../utils/animations";

const Welcome = () => {
  return (
    <section className="homepage__welcome" aria-labelledby="welcome-title">
      <motion.div
        className="welcome__info flex-container flex-column txt-center pop-font"
        variants={imageParentVariant}
        initial={"initial"}
        whileInView={"whileInView"}>
        <motion.img
          loading="lazy"
          src={PizzaOne}
          alt=""
          aria-hidden="true"
          variants={leftImageVariant}
          width={500}
          height={499}
        />
        <motion.img
          loading="lazy"
          src={PizzaTwo}
          alt=""
          aria-hidden="true"
          variants={rightImageVariant}
          width={500}
          height={499}
        />
        <h2 id="welcome-title" className="txt-white">
          Bienvenido a <strong>Es hora de Pizza!</strong> el restaurante de pizza numero uno del mundo.
        </h2>
        <p>
          Fundado en 1995, Pizza Time se ha convertido en un icono global de la comida rapida, conocido por su deliciosa pizza,
          ingredientes frescos y servicio excepcional. Con miles de ubicaciones en todo el mundo, Pizza Time es el destino preferido
          para los amantes de la pizza que buscan una experiencia culinaria inigualable.
        </p>
      </motion.div>
      <LazyLoadImage
        className="welcome__cover"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Pizzeria con mesas y sillas de madera, iluminada con luces cálidas y acogedoras"
      />
    </section>
  );
};

export default Welcome;

