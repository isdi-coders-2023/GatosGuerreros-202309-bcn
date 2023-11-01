import { customRender } from "../../utils/customRender";
import { screen } from "@testing-library/react";
import App from "./App";
import { describe } from "vitest";

describe("Given an App component", () => {
  describe("When check home route", () => {
    test("Then it should in home page by default ", () => {
      const expectedHeroText =
        "The most curated repository of all Studio Ghibli films";

      customRender(<App />);

      const heroText = screen.getByText(expectedHeroText);

      expect(heroText).toBeInTheDocument();
    });
  });
});
