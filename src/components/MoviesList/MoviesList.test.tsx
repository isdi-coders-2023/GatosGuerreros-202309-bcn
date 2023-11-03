import { screen, render } from "@testing-library/react";
import MoviesList from "./MoviesList";
import { customRender } from "../../utils/customRender";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";
import { MemoryRouter } from "react-router-dom";
import MoviesProviderWrapper from "../../features/movies/store/MoviesProviderWrapper";

describe("Given a MoviesList component", () => {
  describe("When it doesn't recives movies", async () => {
    test("It should create an empty list", async () => {
      customRender(<MoviesList />);

      const ulElement = screen.findByRole("list");
      const liElement = screen.findByRole("listitem");

      expect(ulElement).toBeInTheDocument;
      expect(liElement).toBeNull;
    });
  });
  describe("When MovieCards load", () => {
    test("Then 'Delete' button is on screen", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter initialEntries={["/"]}>
            <MoviesProviderWrapper>
              <MoviesList />
            </MoviesProviderWrapper>
          </MemoryRouter>
        </ThemeProvider>,
      );
    });
  });
});
