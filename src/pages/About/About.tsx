import React, { useEffect, useState } from "react";
import profileImg from "../../assets/images/Jhoan.jpg";
import "./About.scss";

const About: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("");
  const [currentAge, setCurrentAge] = useState<number>(0);

  useEffect(() => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();
      const greetings = ["Buenos días", "Buenas tardes", "Buenas noches"];

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting(greetings[0]);
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting(greetings[1]);
      } else {
        setGreeting(greetings[2]);
      }
    };

    const calculateCurrentAge = () => {
      const currentYear = new Date().getFullYear();
      const birthYear = 2002;
      setCurrentAge(currentYear - birthYear);
    };

    calculateCurrentAge();
    getCurrentGreeting();
  }, []);

  return (
    <div className="about-container">
      <section className="about-section about-section-up-left">
        <div className="about-photo">
          <img
            className="photo"
            src={profileImg}
            alt="Jhoan"
          />
        </div>
        <h1 className="about-name">Jhoan Castro Santacruz</h1>
      </section>

      <section className="about-section about-section-up-right">
        <div className="about-greeting">
          <strong>{greeting}</strong>
          <p>Me permito darles una calurosa bienvenida a mi perfil. Mi nombre es Jhoan, actualmente tengo {currentAge} años.</p>
          <p>
            Soy un apasionado por la tecnología, por eso
            desde el 2020 estoy inmerso en el desarrollo de software.
          </p>
          <p>
            Me gusta aprender cosas nuevas, por eso me he
            especializado en el desarrollo de aplicaciones web y móviles, siempre busco mejorar mis habilidades y conocimientos por eso he creado algunos proyectos personales.
          </p>
          <p>La idea de automatizar los procesos son los que me motivan a crear soluciones interactivas.</p>
        </div>
      </section>

      <section className="about-section about-section-center">
        <div className="about-description">
        <p>
            He participado en proyectos que han aportado bastante
            valor a mi carrera. Inicié programando un sistema que
            calcula la disponibilidad de tiempo a los colaboradores que
            participan en un proyecto en un determinado rango de
            fecha que se desea consultar. Se usó <strong>Visual Basic For Applications (VBA).</strong>
          </p>
        </div>
      </section>

      <section className="about-section about-section-center-left">
        <div className="about-description">
        <p>
            Luego tuve la oportunidad de participar en la creación del
            App para el fondo de pensiones <strong>Porvenir,</strong> en
            donde colaboré con la maquetación, implementación de lógica y 
            servicios API REST.
          </p>
        </div>
      </section>

      <section className="about-section about-section-center-right">
        <div className="about-description">
        <p>
            En un proyecto universitario estuve programando un módulo
            de desarrollo <strong>(ESP32),</strong> que consistió en crear un
            carro a control remoto. Desarrollé una App para enviar peticiones a través de 
            conexión BlueTooth. Se integraron los sensores de 
            temperatura y humedad, ultrasonido y servoMotor. 
            Se usó <strong>Arduino Studio y C++</strong> para el módulo, e 
            <strong>Ionic React TS con Capacitor</strong> para la App.
          </p>
        </div>
      </section>

      <section className="about-section about-section-bottom-left">
        <div className="about-description">
        <p>
            Actualmente me encuentro desarrollando intenciones para 
            un chatBot en WhatsApp, con el lenguaje de <strong>Java</strong> y el 
            framework de <strong>Spring Boot.</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
