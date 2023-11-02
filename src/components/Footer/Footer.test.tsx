import { screen } from "@testing-library/dom";
import { customRender } from "../../utils/customRender";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When instantiated with text `MyText`", () => {
    test("Then 'myText' is on the screen", async () => {
      const myText = "myText";

      customRender(<Footer text={myText} />);

      const actualValue = await screen.findByText(myText);

      expect(actualValue).toBeInTheDocument();
    });
  });

  describe("When instantiated with a clickable icon link", () => {
    test("Then the Instagram link has href attribute 'https://www.instagram.com/'", async () => {
      const instagramLink = "https://www.instagram.com/";

      customRender(<Footer text="" />);
      const expectedLink = await screen.getAllByRole("link");

      expect(expectedLink[0]).toHaveAttribute("href", instagramLink);
    });
  });

  describe("When instantiated with a clickable icon link", () => {
    test("Then the Facebook link has href attribute 'https://www.facebook.com/'", async () => {
      const instagramLink = "https://www.facebook.com/";

      customRender(<Footer text="" />);
      const expectedLink = await screen.getAllByRole("link");

      expect(expectedLink[1]).toHaveAttribute("href", instagramLink);
    });
  });

  describe("When instantiated with a clickable icon link", () => {
    test("Then the X link has href attribute 'https://www.x.com/'", async () => {
      const instagramLink = "https://www.x.com/";

      customRender(<Footer text="" />);
      const expectedLink = await screen.getAllByRole("link");

      expect(expectedLink[2]).toHaveAttribute("href", instagramLink);
    });
  });
});
