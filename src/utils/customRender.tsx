import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import MovieProviderWrapper from "../features/movies/store/MoviesProviderWrapper";
import UiContextWrapper from "../features/ui/store/UiContextWrapper";

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <UiContextWrapper>
        <MovieProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <GlobalStyle />
              {children}
            </BrowserRouter>
          </ThemeProvider>
        </MovieProviderWrapper>
      </UiContextWrapper>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};
