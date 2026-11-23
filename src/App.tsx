import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Experiencia from "./sections/Experiencia";
import Metodo from "./sections/Metodo";
import Trayectoria from "./sections/Trayectoria";
import SobreMi from "./sections/SobreMi";
import Closing from "./sections/Closing";
import { MAILTO, MAIN_ACTION } from "./sections/shared";
import "./page.css";

/**
 * The design kit in public/assets (system, motion, layout, diagrams, moments) works on the DOM the
 * page already has. It is loaded once, after React has committed the markup, so it finds every
 * section in place. The page holds no React state after that, so React never redraws what the kit
 * has touched.
 */
const KIT_SCRIPTS = ["system.js", "motion/motion.js", "layout/layout.js", "diagrams/mount.js"];
let kitLoaded = false;

function loadKit() {
  if (kitLoaded) return;
  kitLoaded = true;
  const base = `${process.env.PUBLIC_URL}/assets/`;
  for (const src of KIT_SCRIPTS) {
    const s = document.createElement("script");
    s.type = "module";
    s.src = base + src;
    document.body.appendChild(s);
  }
}

function App() {
  useEffect(loadKit, []);
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Experiencia />
        <Metodo />
        <Trayectoria />
        <SobreMi />
      </main>
      <Closing />
      {/* the phone's action bar is a child of body (system.css and system.js look for body > nav.actionbar) */}
      {createPortal(
        <nav className="actionbar" aria-label="Acción rápida">
          <a className="btn btn--primary" href={MAILTO}>{MAIN_ACTION}</a>
        </nav>,
        document.body
      )}
    </>
  );
}

export default App;
