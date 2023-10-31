import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Jhoan Castro Santacruz</h3>
            <p>Bienvenidos a mi portafolio web, encontraras información de acerca de mi </p>
          </div>
          <div className="footer-column">
            <h4>Contacto</h4>
            <p>Popayán Cauca</p>
            <p>318 6046846</p>
            <p>cjhoan735@gmail.com</p>
          </div>
          <div className="footer-column">
            <h4>Enlaces</h4>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Acerca de</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Derechos de autor © {new Date().getFullYear()} Jhoan Castro Santacruz.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
