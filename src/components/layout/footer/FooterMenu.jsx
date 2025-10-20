import { NavLink } from "react-router-dom";
import ResetLocation from "../../../utils/ResetLocation";
import footerMenu from "../../../data/footer-menu";
import React from 'react'
import { Link } from 'react-router-dom'

const FooterMenu = () => {
  return (
    <nav aria-label="Main Menu" className="footer-menu">
      <ul className="footer__menu  flex-container flex-column">
        {footerMenu.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              className={({ isActive }) => `txt-white ${isActive ? "footer-active-link" : ""}`}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              onClick={ResetLocation}
              to={to}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul>
        <li key="home"><Link to="/">Inicio</Link></li>
        <li key="menu"><Link to="/menu">Menu</Link></li>
        <li key="contact"><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};
export default FooterMenu;

