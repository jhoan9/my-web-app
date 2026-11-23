import React from "react";

/** Contact data shown on the page. The email is only used as a mailto: link. */
export const EMAIL = "cjhoan735@gmail.com";
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Contacto desde el portafolio")}`;
export const MAIN_ACTION = "Escribir a Jhoan";
export const BIRTH_YEAR = 2002;

/** CSS custom properties are not part of React.CSSProperties, so sections cast through this helper. */
export const vars = (v: Record<string, string | number>) => v as React.CSSProperties;

export const Arrow: React.FC = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

export const Logo: React.FC = () => (
  <a className="nav__logo" href="#top">
    <span className="mark" data-mark="arc" aria-hidden="true"></span>Jhoan Castro
  </a>
);

const Tick: React.FC<{ className: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
    <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
  </svg>
);

export const CheckBox: React.FC = () => (
  <span className="ui-check__box">
    <svg viewBox="0 0 16 16">
      <path d="m4.5 8.2 2.3 2.3 4.7-5" />
    </svg>
  </span>
);

export { Tick };
