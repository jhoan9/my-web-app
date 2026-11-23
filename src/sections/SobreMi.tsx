import React from "react";
import { BIRTH_YEAR } from "./shared";

const tools = {
  layout: "hub",
  alt: "Las herramientas con las que trabaja Jhoan: Java, Spring Boot, React, TypeScript, WhatsApp, Capacitor, Arduino y C++.",
  center: { label: "Jhoan", icon: "ui:user" },
  spokes: [
    { label: "Java", icon: "java" },
    { label: "Spring Boot", icon: "spring" },
    { label: "React", icon: "react" },
    { label: "TypeScript", icon: "typescript" },
    { label: "WhatsApp", icon: "whatsapp" },
    { label: "Capacitor", icon: "capacitorjs" },
    { label: "Arduino", icon: "arduino" },
    { label: "C++", icon: "c-plusplus" },
  ],
};

/** About: who he is in a few lines, the tools as a hub of real icons. */
const SobreMi: React.FC = () => {
  const age = new Date().getFullYear() - BIRTH_YEAR;
  return (
    <section className="section" id="sobre-mi" aria-labelledby="sobre-mi-h">
      <div className="wrap">
        <div className="grid grid--top fill">
          <div className="span-5">
            <div className="section-head">
              <h2 id="sobre-mi-h">Jhoan Castro Santacruz, de Popayán</h2>
            </div>
            <div className="stack-4 measure">
              <p>
                Tengo {age} años y programo desde 2020. Lo que más me mueve es automatizar
                procesos que hoy se hacen a mano.
              </p>
              <p>
                En backend trabajo con Java y Spring Boot; en apps web y móviles, con React,
                Ionic y TypeScript. También he programado hardware con Arduino y C++.
              </p>
            </div>
          </div>
          <div className="panel sobre__panel span-6 start-7">
            <div className="dg" data-dg-still data-diagram={JSON.stringify(tools)}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
