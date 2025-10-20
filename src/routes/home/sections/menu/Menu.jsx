import "./menu.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResetLocation from "../../../../utils/ResetLocation";
import pizzaMenuPreview from "../../../../data/menu-preview";
import { formatPrice } from "../../../../utils/formatPrice";

const Menu = () => {
  return (
    <section className="homepage__menu-preview flex-container flex-column" aria-labelledby="menu-title">
      <div className="menu-preview__info txt-center">
        <h2 className="pop-font txt-white" id="menu-title">
         Preview de nuestro menu
        </h2>
        <p className="section-description">
          Disfruta de una seleccion de nuestras deliciosas pizzas, hechas con ingredientes frescos y una masa artesanal
          perfecta. Cada bocado es una explosion de sabor que te hara volver por mas.
        </p>
      </div>
      <div className="menu-preview__meals flex-container flex-column">
        {pizzaMenuPreview.map((pizza, id) => (
          <motion.article
            key={id}
            aria-labelledby="pizza-title"
            className="menu-preview__meal flex-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}>
            <img alt={pizza.name} src={`${pizza.img375}`} width={375} height={250} loading="lazy" />
            <div className="menu-preview__meal-details flex-container flex-column">
              <h3 className="txt-white" id="pizza-title">
                {pizza.name}
              </h3>
              <p>{pizza.description}</p>
              <div className="menu-preview__meal-pricing flex-container flex-row txt-center">
                <p>
                  {formatPrice(Math.round(pizza.price * 1000)).replace(/[^0-9.]/g, "")}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <Link
        onClick={ResetLocation}
        to="/menu"
        aria-label="Explora mas pizzas en el menu"
        className="active-button-style txt-white">
        Mas pizzas
      </Link>
    </section>
  );
};

export default Menu;

