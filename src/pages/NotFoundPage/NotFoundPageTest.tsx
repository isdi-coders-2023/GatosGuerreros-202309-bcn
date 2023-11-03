import { customRender } from "../../utils/customRender";
import { screen } from "@testing-library/dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it is called", () => {
    test("It should show a heading with the text `Oops!`", () => {
      const headingText = "Oops!";

      customRender(<NotFoundPage />);
      const heading = screen.getByRole("heading");

      expect(heading).toBe(headingText);
    });
  });
});
