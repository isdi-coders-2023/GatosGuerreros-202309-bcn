import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import { customRender } from "../utils/customRender";

describe("Given a HomePage", () => {
  describe("When it is called", () => {
    test("It should show a heading with the text `The most curated repository of all Studio Ghibli films`", () => {
      const headingText =
        "The most curated repository of all Studio Ghibli films";

      customRender(<HomePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("It should show the hero image", () => {
      const alternativeText = "Chihiro looking to the horizon";

      customRender(<HomePage />);
      const image = screen.getByAltText(alternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
