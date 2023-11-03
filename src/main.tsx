import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import MovieProviderWrapper from "./features/movies/store/MoviesProviderWrapper";
import "@fontsource/dm-sans";
import "@fontsource/dm-serif-text";
import UiContextWrapper from "./features/ui/store/UiContextWrapper";

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
