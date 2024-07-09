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
            <p>Bienvenidos a mi portafolio web, encontrarás información sobre mí.</p>
          </div>
          <div className="footer-column">
            <h4>Contacto</h4>
            <p>Popayán Cauca</p>
            <p><a href="tel:+573186046846">318 6046846</a></p>
            <p><a href="mailto:cjhoan735@gmail.com">cjhoan735@gmail.com</a></p>
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
