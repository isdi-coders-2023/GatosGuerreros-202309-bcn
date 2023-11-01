import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import MovieProviderWrapper from "./features/movies/store/MoviesProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MovieProviderWrapper>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MovieProviderWrapper>
  </React.StrictMode>,
);
