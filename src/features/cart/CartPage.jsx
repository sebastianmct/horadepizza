import "./assets/cart.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollBtn from "../../components/ScrollBtn";
import EmptyCart from "./components/EmptyCart";
import { useCart } from "../../context/CartContext";
import { slideInLeft } from "../../utils/animations";
import ResetLocation from "../../utils/ResetLocation";
import LinkButton from "../../components/LinkButton";
import CheckoutBtn from "../checkout/components/CheckoutBtn";
const CartPage = ({ CartItem, activateLoginModal, isLoggedIn }) => {
  const { cart } = useCart();
  useEffect(() => {
    document.title = "Carrito de compras | Pizza Time";
  }, []);
  return (
    <motion.main
      className="cart"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? <EmptyCart /> : CartItem}
      <div className="cart-totals__interaction">
        <CheckoutBtn
          className="active-button-style"
          aria-label="Proceder al pago"
          isLoggedIn={isLoggedIn}
          activateLoginModal={activateLoginModal}
        />
        <LinkButton aria-label="Volver al menú" onClick={ResetLocation} to="/menu" className="back-to-menu">
          Volver al menú
        </LinkButton>
      </div>
      <ScrollBtn />
    </motion.main>
  );
};

export default CartPage;

