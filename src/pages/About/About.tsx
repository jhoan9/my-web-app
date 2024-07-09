import React, { useEffect, useState } from "react";
import "./About.scss";

const About: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("");
  const [currentAge, setCurrentAge] = useState<number>(0);

  useEffect(() => {
    const getCurrentGreting = () => {
      const currentHour = new Date().getHours();

      const greeting: string[] = [
        "Buenos días",
        "Buenas tardes",
        "Buenas noches",
      ];

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting(greeting[0]);
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting(greeting[1]);
      } else {
        setGreeting(greeting[2]);
      }
    };

    const getModeForUsageLocation = () => {
      const currentYear = new Date().getFullYear();
      const birthdate = 2002;

      const age = currentYear - birthdate;

      setCurrentAge(age);
    };

    getModeForUsageLocation();
    getCurrentGreting();
  }, []);

  return (
    <div className="about-container">
      <main className="about-header">
        <div className="about-photo">
          <img
            className="photo"
            src="https://plus.unsplash.com/premium_photo-1673643405538-de0f82933fcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jhoan"
          />
        </div>
        <h1 className="about-name">Jhoan Castro Santacruz</h1>
        <div className="about-description">
          <p>
            <hr /> <strong>{greeting}</strong>
            <br />
            <br />
            Me permito darles una calurosa bienvenida a mi perfil <br />
            Mi nombre es Jhoan, actualmente tengo {currentAge} años. <br />
            <br />
            Soy una persona a quien le gusta la tecnologia, por eso
            <br />
            desde el 2020 estoy inmerso en el desarrollo de software.
            <br />
            <br />
            He participado en proyectos que han aportado bastante
            <br /> valor a mi carrera, inicie programando un sistema que <br />
            calcula la disponibilidad de tiempo a los colaboradores que <br />{" "}
            participan en un proyecto en un determinado rango de <br />
            fecha que se desea consultar. se usó <br />
            <strong> Visual Basic For Applications (VBA) </strong>
            <br />
            <br />
            Luego tuve la oprtunidad de participar en la creación del
            <br /> App para el fondo de pensiones <strong>Porvenir,</strong> en
            donde <br />
            colaboré con la maquetación, implementación de lógica y<br />{" "}
            servicios api REST.
            <br />
            <br />
            En un proyecto universitario estuve programando un <br/>módulo
            de desarrollo <strong>(ESP32),</strong> consistió en crear un <br/>
            carro a control remoto, en donde por medio de un App que <br/>
            desarrollé, se logró enviar peticiones a travez de una <br/> conexión
            BlueTooth, se integraron los sensores de <br/>temperatura
            y humedad, ultrasonido y servoMotor <br/> 
            se uso <strong>Arduino Studio y c++ </strong>para el módulo. <br/>
            <strong>Ionic React TS con capacitor</strong> para el App.        
            <br />
            <br />
            Actualmete me encuentro desarrollando intenciones para <br/>
            un chatBot en WhatsApp, con el lenguaje de <strong>Java</strong> y el<br/>
            framework de <strong>Spring Boot.</strong>
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
