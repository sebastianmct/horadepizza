import Visa from "./assets/payment-methods/visa-icon.svg";
import MasterCard from "./assets/payment-methods/mastercard-icon.svg";
import ApplePay from "./assets/payment-methods/applepay-icon.svg";
import GooglePay from "./assets/payment-methods/googlepay-icon.svg";

const FooterContact = () => {
  return (
    <section className="footer__contact flex-container flex-column">
      <h2>Tienes Preguntas?</h2>
      <address>
        <p>
          <a href="tel:0000001234567" aria-label="llamanos a 56900001234567">
            (+56 9) 0000 0123 4567
          </a>
        </p>
        <p>
          <a href="mailto:pizza@pizzatime.com" aria-label="Email us at pizza at pizzatime dot com">
            eshorpizza@hotmail.com
          </a>
        </p>
        <p>
          <time dateTime="08:00">8:00am</time> - <time dateTime="21:00">9:00pm</time>
        </p>
      </address>
      <section className="footer__contact__payments">
        <h3>Metodos de pago aceptados</h3>
        <ul className="footer__contact__payments-img">
          <li>
            <img width="50" height="50" src={Visa} alt="VISA" />
          </li>
          <li>
            <img width="50" height="50" src={MasterCard} alt="Mastercard" />
          </li>
          <li>
            <img width="50" height="50" src={ApplePay} alt="Apple Pay" />
          </li>
          <li>
            <img width="50" height="50" className="googlepay" src={GooglePay} alt="Google Pay" />
          </li>
        </ul>
      </section>
    </section>
  );
};
export default FooterContact;

