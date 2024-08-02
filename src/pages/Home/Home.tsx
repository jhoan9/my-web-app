import React from "react";
import WelcomeModal from "../../Welcome/Welcome";
import profilImg from "../../assets/images/Jhoan.jpg";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <>
      <WelcomeModal />
      <div className="home-container">
        <div className="content">
          <div className="left">
            <h1 className="name">Jhoan Castro Santacruz</h1>
            <p className="description">
              Creador de soluciones de software personalizadas con enfoque en el
              desarrollo de Java Spring Boot, desarrollo de bots en WhatsApp y
              desarrollo web con Ionic y React TS. Con más de dos años de
              experiencia en la industria, mi pasión es innovar y crear soluciones
              dinámicas e interactivas que lleven las empresas al siguiente nivel.
            </p>
          </div>
          <div className="right">
            <img
              src={profilImg}
              alt="Imagen de perfil"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
