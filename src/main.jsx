import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contributions from "./Contributions.jsx";
import "./retro.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {window.location.pathname.replace(/\/$/, '') === '/opensource' ? <Contributions /> : <App />}
  </React.StrictMode>,
);
