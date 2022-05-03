import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/normalize-scss";
import { BrowserRouter } from "react-router-dom";
{
  /* import { Route, Routes } from "react-router-dom"; */
}
{
  /* import './index.css' */
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
