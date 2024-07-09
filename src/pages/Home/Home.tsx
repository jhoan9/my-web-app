import React from "react";
import "./Home.scss";
import WelcomeModal from "../../Welcome/Welcome";

const Home: React.FC = () => {
  return (
    <>
    <WelcomeModal/>
    <div className="home-container">
      <div className="container">
        <div className="left">
          <h1 className="name">Jhoan Castro Santacruz</h1>
          <p className="description">
            Creador de soluciones de software personalizadas con enfoque en el
            desarrollo de Java Spring Boot, desarrollo de bots de WhatsApp y
            desarrollo web con Ionic y React TS. Con más de dos años de
            experiencia en la industria, mi pasión es innovar y crear soluciones
            dinámicas e interactivas que lleven las empresas al siguiente nivel.
          </p>
        </div>
        <div className="right">
          <img
            src="https://plus.unsplash.com/premium_photo-1673643405538-de0f82933fcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagen de perfil"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
