import React from "react";
import LinkButton from "../../../components/LinkButton";
import ResetLocation from "../../../utils/ResetLocation";

const CheckoutBtn = ({ isLoggedIn, className, activateLoginModal }) => {
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <LinkButton onClick={ResetLocation} to="/checkout" aria-label="Proceder al pago" className={className}>
          Pagar
        </LinkButton>
      ) : (
        <button
          className={className}
          aria-label="Proceder al pago"
          onClick={() => {
            ResetLocation();
            activateLoginModal();
          }}>
          Pagar
        </button>
      )}
    </React.Fragment>
  );
};

export default CheckoutBtn;

