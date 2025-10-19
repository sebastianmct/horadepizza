import { Link } from "react-router-dom";
import ResetLocation from "../../../utils/ResetLocation";

const EmptyCart = () => {
  return (
    <section className="cart__items empty-cart">
      <h3>Oh ! Tu carrito esta vacio!</h3>
      <p>Parece que aún no has añadido nada a tu carrito.</p>
      <Link to="/menu" className="active-button-style" aria-label="Explore the menu" onClick={ResetLocation}>
        Explorar menú
      </Link>
    </section>
  );
};

export default EmptyCart;

