import React from "react";
import profileImg from "../assets/images/Jhoan.jpg";
import { Logo, MAILTO, MAIN_ACTION } from "./shared";

const Chev: React.FC = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** nav-mega: one fixed bar; "Experiencia" opens a panel with link columns and one picture card. */
const Nav: React.FC = () => (
  <header className="nav">
    <div className="wrap nav__bar">
      <a className="skip-link" href="#top">Saltar al contenido</a>
      <Logo />
      <nav className="nav__links" aria-label="Principal">
        <div className="nav__item">
          <a className="nav__link" href="#experiencia">Experiencia <Chev /></a>
          <div className="nav__menu">
            <div className="wrap grid">
              <div className="menu-col span-3">
                <p className="t-label">Trabajo actual</p>
                <a href="#experiencia">Notificaciones por SMPP<span>Envío y estado de cada SMS</span></a>
                <a href="#metodo">Método SDD<span>Especificación, plan, tareas, código</span></a>
              </div>
              <div className="menu-col span-3">
                <p className="t-label">Antes</p>
                <a href="#trayectoria">Chatbot de WhatsApp<span>Java y Spring Boot</span></a>
                <a href="#trayectoria">App de Porvenir<span>Maquetación y servicios REST</span></a>
                <a href="#trayectoria">Carro con ESP32<span>C++, Ionic y Bluetooth</span></a>
              </div>
              <a className="menu-card span-3 start-10" href="#sobre-mi">
                <div className="panel">
                  <img className="frame__img" src={profileImg} alt="Retrato de Jhoan Castro Santacruz" width={565} height={743} loading="lazy" style={{ objectPosition: "50% 22%" }} />
                </div>
                <span className="t-card">Sobre mí</span>
                <span className="t-small muted">Popayán, programando desde 2020</span>
              </a>
            </div>
          </div>
        </div>
        <div className="nav__item"><a className="nav__link" href="#metodo">Método</a></div>
        <div className="nav__item"><a className="nav__link" href="#trayectoria">Trayectoria</a></div>
        <div className="nav__item"><a className="nav__link" href="#sobre-mi">Sobre mí</a></div>
      </nav>
      <div className="nav__actions">
        <a className="btn btn--primary" href={MAILTO}>{MAIN_ACTION}</a>
      </div>
      <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menú">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  </header>
);

export default Nav;
