import { render, screen } from "@testing-library/react";
import MoviesProviderWrapper from "../../features/movies/store/MoviesProviderWrapper";
import MoviesList from "./MoviesList";

describe("Given a MoviesList component", () => {
  describe("When it doesn't recives movies", async () => {
    test("It should create an empty list", async () => {
      render(
        <MoviesProviderWrapper>
          <MoviesList></MoviesList>
        </MoviesProviderWrapper>,
      );

      const ulElement = screen.findByRole("list");
      const liElement = screen.findByRole("listitem");

      expect(ulElement).toBeInTheDocument;
      expect(liElement).toBeNull;
    });
  });
});
