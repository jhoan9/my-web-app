import React from "react";
import profileImg from "../assets/images/Jhoan.jpg";

const projects: { name: string; line: string; stack: string }[] = [
  {
    name: "Notificaciones de contravenciones",
    line: "Conexión SMPP para enviar notificaciones y recibir su estado de entrega.",
    stack: "SMPP · SDD",
  },
  {
    name: "Chatbot de WhatsApp",
    line: "Intenciones de conversación para un chatbot en WhatsApp.",
    stack: "Java · Spring Boot",
  },
  {
    name: "App del fondo de pensiones Porvenir",
    line: "Maquetación, lógica de la app y consumo de servicios API REST.",
    stack: "App móvil · REST",
  },
  {
    name: "Carro a control remoto con ESP32",
    line: "Proyecto universitario: app por Bluetooth, sensores de temperatura, humedad y distancia, y un servomotor.",
    stack: "C++ · Ionic React",
  },
  {
    name: "Disponibilidad de colaboradores",
    line: "Calcula el tiempo libre de cada persona de un proyecto en un rango de fechas.",
    stack: "VBA",
  },
];

/** Surface band (dealt rhythm: surface-pairs): the projects as rows beside the portrait. */
const Trayectoria: React.FC = () => (
  <section className="section ground-surface" id="trayectoria" aria-labelledby="trayectoria-h">
    <div className="wrap">
      <div className="grid grid--top fill">
        <div className="span-6">
          <div className="section-head">
            <h2 id="trayectoria-h">Cinco proyectos desde 2020</h2>
          </div>
          <ul className="rows">
            {projects.map((p) => (
              <li key={p.name}>
                <span className="rows__name">{p.name}<small>{p.line}</small></span>
                <span className="rows__value">{p.stack}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="frame frame--photo frame--fill span-6 start-7">
          <img
            className="frame__img"
            src={profileImg}
            alt="Retrato de Jhoan Castro Santacruz"
            width={565}
            height={743}
            loading="lazy"
            data-source="client"
            data-subject="retrato del desarrollador"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Trayectoria;
