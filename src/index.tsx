import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build is prerendered (scripts/prerender.mjs): the HTML already holds the same markup
// for readers without scripts. React renders over it with identical output.
ReactDOM.createRoot(container).render(app);

reportWebVitals();
