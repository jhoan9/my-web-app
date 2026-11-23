import React from "react";
import { Arrow, MAILTO, MAIN_ACTION, Tick } from "./shared";

/** One line of the SMPP session in the hero's terminal. */
const Pdu: React.FC<{ op: string; detail: string; time: string }> = ({ op, detail, time }) => (
  <div className="ui-term__ln ui-term__log" data-term-out data-term-step>
    <Tick className="ui-term__tick" />
    <span className="ui-term__path">{op}</span>
    <span className="ui-term__n">{detail}</span>
    <span className="ui-term__t">{time}</span>
  </div>
);

const Cwd: React.FC = () => (
  <span className="ui-term__cwd">~/<span className="ui-term__up">notificaciones/</span>smpp</span>
);

/** Hero (dealt: centred): the headline over one window, an SMPP session sending a notification. */
const Hero: React.FC = () => (
  <section className="hero hero--centred bg-field" data-enter aria-labelledby="hero-h">
    <div className="wrap">
      <div className="hero-text">
        <div className="hero__c">
          <a className="pill" href="#experiencia">
            <span>Desde 2025 en SMPP</span>
            <span className="muted">Ver la experiencia</span>
          </a>
          <h1 id="hero-h">Desarrollador de software en Popayán</h1>
          <p className="hero__lead">
            Construyo servicios backend y apps web. Hoy desarrollo el envío y procesamiento de
            notificaciones de contravenciones en Colombia y otros países, con método SDD.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={MAILTO}>{MAIN_ACTION}<Arrow /></a>
            <a className="btn btn--secondary" href="#trayectoria">Ver la trayectoria</a>
          </div>
        </div>
        <div
          className="hero__window"
          data-fx="grain-gradient"
          data-fx-seed="7"
          role="img"
          aria-label="Una sesión SMPP que abre la conexión, envía una notificación por SMS y recibe su confirmación de entrega"
        >
          <div className="ly-piece" aria-hidden="true">
            <div className="ui ui-panel ui-term" data-ui="terminal-run" data-ui-loop>
              <div className="ui-term__head">
                <span className="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="ui-term__title">notificaciones/smpp</span>
                <span className="ui-meta">sesión SMPP 3.4</span>
                <span className="ui-spacer"></span>
                <span className="ui-chip ui-chip--plain ui-term__branch">transceiver</span>
              </div>
              <div className="ui-term__screen" data-term-screen>
                <div className="ui-term__track" data-term-track>
                  <div className="ui-term__ln ui-term__cmd">
                    <Cwd /><span className="ui-term__sig">$</span>
                    <span className="ui-term__typed" data-term-cmd>enviar --lote</span>
                  </div>
                  <div className="ui-term__ln ui-term__meter" data-term-out data-term-meter>
                    <span className="ui-term__bar" style={{ "--p": 1 } as React.CSSProperties}><i></i></span>
                    <span className="ui-term__count" data-term-count>4 de 4 operaciones</span>
                  </div>
                  <Pdu op="bind_transceiver" detail="ESME_ROK" time="84ms" />
                  <Pdu op="submit_sm" detail="notificación 1 de 1" time="112ms" />
                  <Pdu op="submit_sm_resp" detail="message_id 0A3F9C" time="96ms" />
                  <Pdu op="deliver_sm" detail="stat:DELIVRD" time="2.4s" />
                  <div className="ui-term__ln ui-term__sum" data-term-out>
                    <span className="ui-term__key">Entregadas</span><span className="ui-term__val">1</span><span className="ui-term__dim">(1)</span>
                  </div>
                  <div className="ui-term__ln ui-term__done" data-term-out data-term-done>
                    <span className="ui-term__ok">
                      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.3 2.4 2.4 4.6-5" /></svg>
                    </span>
                    <b>Listo</b><span className="ui-term__dim">en 2.7s</span>
                  </div>
                  <div className="ui-term__ln ui-term__cmd" data-term-next>
                    <Cwd /><span className="ui-term__sig">$</span>
                    <span className="ui-term__typed"></span><i className="ui-term__caret" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
