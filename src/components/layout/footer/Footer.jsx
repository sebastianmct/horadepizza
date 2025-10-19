import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import "./assets/footer.css";

const Footer = () => {
  return (
    <footer className="flex-container flex-column txt-center txt-white pop-font">
      <div className="footer__top">
        <FooterMenu />
      </div>
      <FooterContact />
    </footer>
  );
};

export default Footer;

