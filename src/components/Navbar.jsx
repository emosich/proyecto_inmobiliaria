import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar is-success block"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
      <Link to={"/"} >
      <a className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
      </Link>
        

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Ventas</a>

          <a className="navbar-item">Alquileres</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Categorias</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Casas</a>
              <a className="navbar-item">Departamentos</a>
              <a className="navbar-item">Lotes</a>
              <a className="navbar-item">Locales</a>
            </div>
          </div>
        </div>

        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="departamentos..."
              />
            </p>
            <p className="control">
              <button className="button">Search</button>
            </p>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/myaccount">
              <a className="button is-primary">Mi cuenta</a>
            </Link>
            <Link to="/admin">
              <a className="button is-light">Admin</a>
            </Link>
            <div className="buttons">
              <Link to="/register">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
              </Link>
              <Link to="/login">
                <a className="button is-light">Log in</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
