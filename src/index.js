import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const id = document.getElementById("root");
const root = ReactDOM.createRoot(id);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
