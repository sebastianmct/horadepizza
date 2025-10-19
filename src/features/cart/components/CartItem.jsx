import ChangeItemQuantity from "./ChangeItemQuantity";
import { useCart } from "../../../context/CartContext";

const CartItem = ({ cartTotals }) => {
  const { cart, clearCart } = useCart();
  return (
    <section className="cart__items">
      <div className="cart__items-container">
        {cart.map((cartItem, index) => {
          return (
            <article className="cart__items__single" key={index} aria-labelledby={`item-title-CLP{index}`}>
              <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
              <div className="cart__items__content">
                <header className="cart__items__info">
                  <h3 id={`item-title-CLP{index}`} className="cart__items__title">
                    {cartItem.ItemName}
                    {cartItem.userSelectedAttributes.length > 0 &&
                      cartItem.userSelectedAttributes.map((i, index) => {
                        return <span key={index}>{i.attributeValue}</span>;
                      })}
                  </h3>
                  <p className="cart__items__ingredients">{cartItem.ItemIngredients}</p>
                </header>
                <div className="cart__items__interaction">
                  <ChangeItemQuantity cartItem={cartItem} />
                  <p className="cart__items__pricing">CLP{cartItem.ItemPrice}</p>
                </div>
              </div>
            </article>
          );
        })}
        {cart.length > 0 && (
          <button onClick={clearCart} className="cart__items__clear-btns" aria-label="eliminar todos los items del carrito">
            Eliminar cosas del carrito
          </button>
        )}
      </div>

      {cartTotals}
    </section>
  );
};

export default CartItem;

