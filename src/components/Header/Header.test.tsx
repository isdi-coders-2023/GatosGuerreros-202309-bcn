import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered ", () => {
    test("Then it reads `Giblipedia` on the screen", () => {
      render(<Header />);
      expect(screen.getByText("Giblipedia")).toBeInTheDocument();
    });
  });
});
