import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";
import MovieCard from "./MovieCard";

describe("Given a MovieCard component", () => {
  describe("When it receives Grave of the Fireflies movie", () => {
    const givenMovie = {
      description: "",
      director: "Isao Takahata",
      id: 1,
      title: "Grave of the Fireflies",
      releaseDate: "",
      runningTime: "",
      movieBanner:
        "https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg",
    };

    test("It should create a 'Grave of the Fireflies' heading", async () => {
      const expectedHeading = "Grave of the Fireflies";

      customRender(<MovieCard movieCard={givenMovie} />);
      const heading = await screen.getByText(expectedHeading);

      expect(heading).toBeInTheDocument;
    });

    test("It should create a 'Isao Takahata' heading", async () => {
      const expectedHeading = "Isao Takahata";

      customRender(<MovieCard movieCard={givenMovie} />);
      const heading = await screen.getByText(expectedHeading);

      expect(heading).toBeInTheDocument;
    });

    test("It should create a image banner of the film", async () => {
      const expectedAltText = "Grave of the Fireflies";

      customRender(<MovieCard movieCard={givenMovie} />);
      const altText = await screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
