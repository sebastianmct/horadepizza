import { useCart } from "../context/CartContext";

const SuccessMsg = ({}) => {
  const { isAddedToCart } = useCart();
  return (
    <section className={`success ${isAddedToCart ? "visible" : ""}`} role="alert" aria-live="polite">
      <p>Artículo añadido correctamente al carrito.</p>
    </section>
  );
};
export default SuccessMsg;

