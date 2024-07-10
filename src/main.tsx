import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter future={{ v7_startTransition: true }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
