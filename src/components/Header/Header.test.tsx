import { customRender } from "../../utils/customRender";
import { screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Given a Header component", () => {
  describe("When rendered ", () => {
    beforeEach(() => {
      customRender(<Header />);
    });
    test("Then it reads `Ghiblipedia` on the screen", async () => {
      const titleText = "Ghiblipedia";
      const actualValue = await screen.findByText(titleText);

      expect(actualValue).toBeInTheDocument();
    });
  });
});
