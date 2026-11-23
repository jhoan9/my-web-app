import React from "react";

/** lanes: one notification goes through the SMPP connection; the three operations it relies on. */
const flow = {
  layout: "lanes",
  alt: "Una notificación de contravención pasa por la conexión SMPP: se envía con submit_sm, su estado llega con deliver_sm y la sesión se mantiene con enquire_link.",
  curve: "curve",
  ground: "none",
  input: { label: "Aviso", icon: "ui:file-text", meta: "contravención" },
  core: { label: "Conexión SMPP", icon: "ui:server" },
  lanes: [
    { label: "Envío", icon: "ui:message-square", meta: "submit_sm", done: true },
    { label: "Estado", icon: "ui:mail-check", meta: "deliver_sm", done: true },
    { label: "Sesión", icon: "ui:refresh-cw", meta: "enquire_link", done: true },
  ],
};

/** Current job: split, the text and the three facts on the left, the flow as a diagram card on the right. */
const Experiencia: React.FC = () => (
  <section className="section" id="experiencia" aria-labelledby="experiencia-h">
    <div className="wrap">
      <div className="grid grid--top fill">
        <div className="span-5">
          <div className="section-head">
            <h2 id="experiencia-h">
              Notificaciones de contravenciones por SMS. <span className="muted">Desde 2025.</span>
            </h2>
            <p>
              Desde hace algo más de un año soy desarrollador de software en una empresa que
              envía y procesa notificaciones de contravenciones en Colombia y en varios países.
            </p>
          </div>
          <ul className="rows">
            <li>
              <span className="rows__name">Conexión SMPP<small>La implementé: envía cada mensaje al centro SMS y recibe su estado de entrega.</small></span>
              <span className="rows__value">SMPP</span>
            </li>
            <li>
              <span className="rows__name">Método de trabajo<small>Cada cambio parte de una especificación escrita.</small></span>
              <span className="rows__value">SDD</span>
            </li>
          </ul>
        </div>
        <div className="panel exp__panel span-6 start-7">
          <div className="dg" data-dg-still data-diagram={JSON.stringify(flow)}></div>
        </div>
      </div>
    </div>
  </section>
);

export default Experiencia;
