import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import MovieProviderWrapper from "../features/movies/store/MoviesProviderWrapper";

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <MovieProviderWrapper>
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <GlobalStyle />
            {children}
          </BrowserRouter>
        </ThemeProvider>
      </MovieProviderWrapper>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};
