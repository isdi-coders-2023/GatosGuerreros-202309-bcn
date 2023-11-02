import { screen } from "@testing-library/dom";
import { customRender } from "../../utils/customRender";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When page loads", () => {
    test("Button is in the document", async () => {
      customRender(<Button text="" className="" actionOnClick={() => {}} />);
      const buttonAriaRole = "button";
      const button = await screen.findByRole(buttonAriaRole);
      expect(button).toBeInTheDocument();
    });
  });

  describe("When button has text 'Click Me'", () => {
    test("Then 'Click Me' is in the document", async () => {
      const buttonText = "Click Me";

      customRender(
        <Button text="Click Me" className="" actionOnClick={() => {}} />,
      );

      const buttonWithText = await screen.findByText(buttonText);

      expect(buttonWithText).toBeInTheDocument();
    });
  });

  describe("When button is given className prop 'myButton'", () => {
    test("Then 'myButton' is in the button's className", async () => {
      const className = "myButton";
      customRender(
        <Button className={className} actionOnClick={() => {}} text="" />,
      );

      const buttonWithClassName = await screen.findByRole("button");

      expect(buttonWithClassName.classList.contains("myButton")).toBe(true);
    });
  });

  describe("When button is clicked'", () => {
    test("Then click event is triggered", async () => {
      const user = userEvent.setup();
      const mockClick = vitest.fn();
      customRender(<Button className="" text="" actionOnClick={mockClick} />);
      const button = await screen.findByRole("button");
      await user.click(button);
      expect(mockClick).toHaveBeenCalledOnce();
    });
  });
});
