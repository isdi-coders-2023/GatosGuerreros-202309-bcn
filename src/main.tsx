import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/MainTheme";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
