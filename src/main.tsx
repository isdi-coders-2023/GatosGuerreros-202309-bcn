import "@fontsource/dm-sans";
import "@fontsource/dm-serif-text";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import MovieProviderWrapper from "./features/movies/store/MoviesProviderWrapper";
import UiContextWrapper from "./features/ui/store/UiContextWrapper";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/mainTheme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextWrapper>
      <MovieProviderWrapper>
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </MovieProviderWrapper>
    </UiContextWrapper>
  </React.StrictMode>,
);
