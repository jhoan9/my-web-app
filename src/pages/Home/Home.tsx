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
            Creación de soluciones de software personalizadas con enfoque en el
            desarrollo de Java Spring Boot, desarrollo de bots de WhatsApp y
            desarrollo web con Ionic y React TS. Con más de dos años de
            experiencia en la industria, mi pasión es innovar y crear soluciones
            dinámicas e interactivas que lleven las empresas al siguiente nivel.
          </p>
        </div>
        <div className="right">
          <img
            src="https://media.licdn.com/dms/image/D5603AQHw_twFv3oOzA/profile-displayphoto-shrink_800_800/0/1699911730493?e=1712188800&v=beta&t=rkzjFueHnAmlX86DNc0jXQRcVVZOoUIZTGGeW2uyu8w"
            alt="Imagen de perfil"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
