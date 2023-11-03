import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";
import MovieCard from "./MovieCard";

describe("Given a Grave of the Fireflies MovieCard component", () => {
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
  describe("When it's instanciated", () => {
    test("It should create a 'Grave of the Fireflies' heading", async () => {
      const expectedHeading = "Grave of the Fireflies";

      customRender(<MovieCard movie={givenMovie} />);
      const heading = await screen.getByText(expectedHeading);

      expect(heading).toBeInTheDocument;
    });

    test("It should create a 'Isao Takahata' heading", async () => {
      const expectedHeading = "Isao Takahata";

      customRender(<MovieCard movie={givenMovie} />);
      const heading = await screen.getByText(expectedHeading);

      expect(heading).toBeInTheDocument;
    });

    test("It should create a image banner of the film", async () => {
      const expectedAltText = "Grave of the Fireflies";

      customRender(<MovieCard movie={givenMovie} />);
      const altText = await screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
