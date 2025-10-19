import { useCart } from "../../../context/CartContext";

const ChangeItemQuantity = ({ cartItem }) => {
  const { handleAddProduct, handleRemoveProduct } = useCart();
  return (
    <div className="cart__add-items">
      <button
        onClick={() => {
          handleAddProduct(cartItem, cartItem.userSelectedAttributes);
        }}
        aria-label={`Add ${cartItem.ItemName} to the cart`}>
        +
      </button>
      <p>{cartItem.quantity}</p>
      <button
        onClick={() => {
          handleRemoveProduct(cartItem, cartItem.userSelectedAttributes);
        }}
        aria-label={`Eliminar ${cartItem.ItemName} Del carrito`}>
        -
      </button>
    </div>
  );
};

export default ChangeItemQuantity;

