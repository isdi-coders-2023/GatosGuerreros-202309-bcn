import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it is called", () => {
    test("It should show a heading with the text `The most curated repository of all Studio Ghibli films`", () => {
      const headingText =
        "The most curated repository of all Studio Ghibli films";

      render(<HomePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("It should show the hero image", () => {
      const alternativeText = "imagen de Chihiro mirando al horizonte";

      render(<HomePage />);
      const image = screen.getByAltText(alternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
