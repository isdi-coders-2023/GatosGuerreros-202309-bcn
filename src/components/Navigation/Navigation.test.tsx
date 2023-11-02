import { screen } from "@testing-library/react";
import { customRender } from "../../utils/customRender";
import NavigationBar from "./Navigation";

describe("Given a NavigationBar component on screen", () => {
  test("Then 'Home' appears on screen", async () => {
    customRender(<NavigationBar path="home" />);
    const expectedHomeText = "Home";
    const actualHomeText = await screen.getByText(expectedHomeText);
    expect(actualHomeText).toBeInTheDocument();
  });

  test("Then 'Add' appears on screen", async () => {
    customRender(<NavigationBar path="home" />);
    const expectedAddText = "Add";
    const actualAddText = await screen.getByText(expectedAddText);
    expect(actualAddText).toBeInTheDocument();
  });

  describe("When receives 'home' as path parameter", () => {
    test("Then 'home-icon' has 'Home active icon' as alt text ", async () => {
      customRender(<NavigationBar path="home" />);
      const expectedAltText = "Home active icon";
      const actualAltText = await screen.getByAltText(expectedAltText);
      expect(actualAltText).toBeInTheDocument();
    });

    test("Then 'add-icon' has 'Add icon' as alt text ", async () => {
      customRender(<NavigationBar path="home" />);
      const expectedAltText = "Add icon";
      const actualAltText = await screen.getByAltText(expectedAltText);
      expect(actualAltText).toBeInTheDocument();
    });

    test("Then 'Add icon Add' has href set to '/add' ", () => {
      customRender(<NavigationBar path="home" />);
      const linkName = { name: "Add icon Add" };
      const actualLinkAttributes = screen.getByRole("link", linkName);
      const expectedHref = "/add";
      expect(actualLinkAttributes).toHaveAttribute("href", expectedHref);
    });

    test("Then 'Home active icon Home' has href set to '/home'", () => {
      customRender(<NavigationBar path="home" />);
      const linkName = { name: "Home active icon Home" };
      const actualHomeLinkAttributes = screen.getByRole("link", linkName);
      const expectedHref = "/home";
      expect(actualHomeLinkAttributes).toHaveAttribute("href", expectedHref);
    });
  });

  describe("When receives 'add' as path parameter", () => {
    test("Then 'add-icon' has 'Add active icon' as alt text ", async () => {
      customRender(<NavigationBar path="add" />);
      const expectedAltText = "Add active icon";
      const actualAltText = await screen.getByAltText(expectedAltText);
      expect(actualAltText).toBeInTheDocument();
    });

    test("Then 'home-icon' has 'Home icon' as alt text ", async () => {
      customRender(<NavigationBar path="add" />);
      const expectedAltText = "Home icon";
      const actualAltText = await screen.getByAltText(expectedAltText);
      expect(actualAltText).toBeInTheDocument();
    });

    test("Then 'Add icon Add' has href set to '/add' ", () => {
      customRender(<NavigationBar path="add" />);
      const linkName = { name: "Add active icon Add" };
      const actualLinkAttributes = screen.getByRole("link", linkName);
      const expectedHref = "/add";
      expect(actualLinkAttributes).toHaveAttribute("href", expectedHref);
    });

    test("Then 'Home active icon Home' has href set to '/home'", () => {
      customRender(<NavigationBar path="add" />);
      const linkName = { name: "Home icon Home" };
      const actualHomeLinkAttributes = screen.getByRole("link", linkName);
      const expectedHref = "/home";
      expect(actualHomeLinkAttributes).toHaveAttribute("href", expectedHref);
    });
  });
});
