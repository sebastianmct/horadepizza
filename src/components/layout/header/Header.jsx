import "./assets/header.css";

import logo from "./assets/logo.png";
import openMenu from "./assets/open-menu.svg";
import closeMenu from "./assets/close-menu.svg";
import { Link, NavLink } from "react-router-dom";
import Cart from "./assets/cart-icon-dark.png";
import SuccessMsg from "../../SuccessMsg";
import ResetLocation from "../../../utils/ResetLocation";
import headerMenu from "./data/header-menu";
import { useCart } from "../../../context/CartContext";
import React from "react";

const Header = ({
  isLoggedIn,
  loginModal,
  handleLogoutUser,
  isNavOpen,
  setIsNavOpen,
  hideMenu,
  activateLoginModal,
}) => {
  const { orderSummary } = useCart();
  const showModal = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Para pruebas rápidas: marca admin en localStorage con localStorage.setItem('isAdmin','true')
  const isAdmin = typeof window !== "undefined" && localStorage.getItem("isAdmin") === "true";

  return (
    <header aria-labelledby="title" className="header">
      {loginModal}
      <nav className="header__nav flex-container flex-row txt-center" aria-label="Header Menu">
        <NavLink
          onClick={() => {
            ResetLocation();
            hideMenu();
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white">
          <img width="100" height="100" className="logo" src={logo} alt="" aria-hidden="true" />
          <h1 id="title" translate="no">
            Tiempo de<span>Pizza</span>
          </h1>
        </NavLink>
        <ul id="main-menu" className={`header__nav__menu flex-row pop-font ${isNavOpen ? "active" : ""}`}>
          {headerMenu.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className={({ isActive }) => `txt-white ${isActive && label !== "Home" ? "header-active-link" : ""}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                to={to}>
                {label}
              </NavLink>
            </li>
          ))}
          {isLoggedIn && (
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className={({ isActive }) => `txt-white ${isActive ? "header-active-link" : ""}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                to="/profile">
                Perfil
              </NavLink>
            </li>
          )}
          <li>
            <div className="login-and-cart">
              {isLoggedIn ? (
                <Link to="/" className="passive-button-style txt-white" onClick={handleLogoutUser}>
                  Salir
                </Link>
              ) : (
                <button
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    activateLoginModal();
                  }}>
                  Iniciar sesion
                </button>
              )}
              <NavLink
                className="cart-btn active-button-style txt-white"
                to="/cart"
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}>
                <img src={Cart} alt="" aria-hidden="true" />
                <p>Carrito</p>
                <p>({orderSummary.quantity})</p>
              </NavLink>
            </div>
          </li>
        </ul>
        <button
          className="header__nav__hamburger"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          aria-controls="main-menu"
          onClick={showModal}>
          <img width="80" height="80" src={isNavOpen ? closeMenu : openMenu} alt="" />
        </button>
      </nav>

      <SuccessMsg />
    </header>
  );
};

export default Header;

