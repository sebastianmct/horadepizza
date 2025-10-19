import { useCart } from "../../../context/CartContext";

const CartTotals = ({ className }) => {
  const { orderSummary } = useCart();
  return (
    <section className={className}>
      <h3 id="cart-summary-title">Total de Carrito</h3>
      {orderSummary.quantity > 0 && (
        <dl className="cart-totals_content">
          <div className="cart-totals_item">
            <dt>IVA: 19%</dt>
            <dd>CLP{orderSummary.taxes}</dd>
          </div>
          <div className="cart-totals_item">
            <dt>Cantidad:</dt>
            <dd>{orderSummary.quantity}</dd>
          </div>
          <div className="cart-totals_item">
            <dt>Total:</dt>
            <dd>CLP{orderSummary.total}</dd>
          </div>
        </dl>
      )}
    </section>
  );
};

export default CartTotals;

