import React from "react";
import { CheckBox } from "./shared";

/** Step 1: the written spec, with the phrase the rest of the work is checked against. */
const Spec: React.FC = () => (
  <div className="ui ui-doc" data-ui="doc" role="img" aria-label="Especificación del envío de notificaciones, con la regla de confirmación de entrega marcada">
    <article className="ui-doc__page">
      <div className="ui-doc__label">spec/envio-notificaciones.md</div>
      <div className="ui-doc__title">2. Envío por SMPP</div>
      <div className="ui-doc__text">Cada notificación se envía como un mensaje <mark className="ui-doc__mark is-on">submit_sm</mark> por una sesión abierta en modo transceiver.</div>
      <div className="ui-doc__text">La notificación queda entregada solo cuando llega su <mark className="ui-doc__mark">deliver_sm con estado DELIVRD</mark>.</div>
      <div className="ui-doc__text">Si la sesión se cae, se abre de nuevo antes de enviar el siguiente mensaje.</div>
    </article>
    <aside className="ui-doc__note ui-panel is-on">
      <div className="ui-doc__kind"><span className="ui-doc__dot"></span><span data-doc-kind>Criterio</span></div>
      <div className="ui-doc__msg" data-doc-msg>Sin confirmación de entrega, la notificación no se marca como enviada.</div>
      <div className="ui-doc__where" data-doc-where>Sección 2, regla 2</div>
    </aside>
  </div>
);

const tasks: [string, boolean][] = [
  ["Abrir la sesión bind_transceiver", true],
  ["Enviar cada notificación con submit_sm", true],
  ["Guardar el message_id de la respuesta", true],
  ["Leer deliver_sm y marcar la entrega", false],
  ["Mantener la sesión con enquire_link", false],
];

/** Step 2: the plan split into tasks. */
const Tasks: React.FC = () => (
  <div className="ui ui-panel ui-checks" data-ui="checklist" role="img" aria-label="Lista de tareas del plan, tres de cinco hechas">
    <div className="ui-checks__head">
      <div className="ui-title">Tareas del plan</div>
      <span className="ui-spacer"></span>
      <div className="ui-meta" data-checks-count>3 de 5</div>
    </div>
    <div className="ui-checks__bar"><i data-checks-bar style={{ "--k": 0.6 } as React.CSSProperties}></i></div>
    <ul className="ui-checks__list">
      {tasks.map(([label, done]) => (
        <li key={label} className={`ui-check${done ? " is-done" : ""}`}>
          <CheckBox />
          <span className="ui-check__label">{label}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** Step 3: the code that answers the spec's rule. */
const Code: React.FC = () => (
  <div className="ui ui-panel ui-code" data-ui="code" role="img" aria-label="Código que marca una notificación como entregada al recibir deliver_sm">
    <div className="ui-code__tabs">
      <span className="ui-code__tab is-on"><i className="ui-code__lang">JV</i>EntregaListener.java</span>
      <span className="ui-spacer"></span>
      <span className="ui-chip ui-chip--plain ui-code__chip" data-code-chip>regla 2</span>
    </div>
    <pre className="ui-code__pre"><code>
<span className="ui-code__ln" data-n="18"><span className="k">void</span> <span className="f">onDeliverSm</span>(DeliverSm pdu) {"{"}</span>{"\n"}
<span className="ui-code__ln" data-n="19">  <span className="k">var</span> r = <span className="f">recibo</span>(pdu);</span>{"\n"}
<span className="ui-code__ln is-mark" data-n="20" data-note="Solo DELIVRD marca la entrega.">  <span className="k">if</span> (r.<span className="f">estado</span>() == <span className="n">DELIVRD</span>)</span>{"\n"}
<span className="ui-code__ln" data-n="21">    <span className="f">entregada</span>(r.<span className="f">id</span>());</span>{"\n"}
<span className="ui-code__ln" data-n="22">{"}"}</span>
    </code></pre>
    <div className="ui-code__hint" data-code-hint><span className="ui-dot"></span><span data-code-text>Cumple la regla 2 de la especificación.</span></div>
  </div>
);

/** pinned-chapters (dealt moment): the three SDD steps open one at a time beside one frame. */
const Metodo: React.FC = () => (
  <section
    className="section"
    id="metodo"
    style={{ "--h": 2 } as React.CSSProperties}
    data-moment="pinned-chapters"
    aria-labelledby="metodo-h"
  >
    <div className="wrap mo-pc__grid">
      <div className="mo-pc__text">
        <h2 id="metodo-h">Desarrollo guiado por especificaciones</h2>
        <ol className="mo-pc__steps">
          <li className="mo-pc__step">
            <h3>1. La especificación</h3>
            <p>Qué debe hacer el cambio, sus reglas y sus casos, antes de la primera línea de código.</p>
            <figure className="mo-pc__visual"><Spec /></figure>
          </li>
          <li className="mo-pc__step">
            <h3>2. El plan en tareas</h3>
            <p>Cada regla se vuelve una tarea pequeña que se puede revisar y probar sola.</p>
            <figure className="mo-pc__visual"><Tasks /></figure>
          </li>
          <li className="mo-pc__step">
            <h3>3. El código y sus pruebas</h3>
            <p>El código responde a una regla escrita, y la prueba confirma que la cumple.</p>
            <figure className="mo-pc__visual"><Code /></figure>
          </li>
        </ol>
      </div>
      <div className="mo-pc__visuals frame"></div>
    </div>
  </section>
);

export default Metodo;
