import React from "react";
import { Arrow, Logo, MAILTO, MAIN_ACTION } from "./shared";

/** footer.closing (dealt: close-word on footer-statement): the action, the name set wide, then the links. */
const Closing: React.FC = () => (
  <footer className="footer closing footer--statement g2m" id="contact" aria-labelledby="close-h">
    <div className="wrap">
      <div className="closing__cta close--word">
        <div className="section-head--split">
          <div>
            <h2 id="close-h">Contacto para proyectos de software</h2>
            <p className="t-lead">Respondo por correo. Trabajo desde Popayán, Cauca.</p>
          </div>
          <a className="btn btn--primary" href={MAILTO}>{MAIN_ACTION}<Arrow /></a>
        </div>
        <p className="close__word" aria-hidden="true">Jhoan</p>
      </div>
      <div className="closing__links">
        <div className="grid">
          <div className="span-6 stack-4">
            <Logo />
            <p className="footer__lede">Desarrollador de software en Popayán, Cauca.</p>
          </div>
          <div className="span-3 start-7 footer__col">
            <h3>Secciones</h3>
            <ul>
              <li><a href="#experiencia">Experiencia</a></li>
              <li><a href="#metodo">Método</a></li>
              <li><a href="#trayectoria">Trayectoria</a></li>
              <li><a href="#sobre-mi">Sobre mí</a></li>
            </ul>
          </div>
          <div className="span-3 footer__col">
            <h3>Contacto</h3>
            <ul>
              <li><a href={MAILTO}>Correo</a></li>
              <li>Popayán, Cauca</li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>&copy; {new Date().getFullYear()} Jhoan Castro Santacruz</span>
          <span>Los nombres y logos de productos son marcas de sus dueños.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Closing;
