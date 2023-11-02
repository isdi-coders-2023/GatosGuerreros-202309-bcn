import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";

import NavigationBar from "./Navigation";

describe("Given a NavigationBar component on screen", () => {
  test("Then 'Home' appears on screen", async () => {
    customRender(<NavigationBar />);
    const expectedHomeText = "Home";
    const actualHomeText = await screen.getByText(expectedHomeText);
    expect(actualHomeText).toBeInTheDocument();
  });

  test("Then 'Add' appears on screen", async () => {
    customRender(<NavigationBar />);
    const expectedAddText = "Add";
    const actualAddText = await screen.getByText(expectedAddText);
    expect(actualAddText).toBeInTheDocument();
  });
});
