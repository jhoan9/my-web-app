import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the headline and the new SMPP experience", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /Desarrollador de software en Popayán/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: /Notificaciones de contravenciones/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: /especificaciones/i })).toBeInTheDocument();
});
