import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import GMap from "./Map";

import Home from "./pages/home";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
