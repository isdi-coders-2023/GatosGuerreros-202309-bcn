import { screen } from "@testing-library/react";
import MoviesList from "./MoviesList";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/customRender";

describe("Given a MoviesList component", () => {
  describe("When it doesn't recives movies", async () => {
    test("It should create an empty list", async () => {
      customRender(<MoviesList />);

      const ulElement = screen.findByRole("list");
      const liElement = screen.findByRole("listitem");

      expect(ulElement).toBeInTheDocument;
      expect(liElement).toBeNull;
    });
  });
  describe("When delete button is pressed", () => {
    test("It should delete the", async () => {
      const user = userEvent.setup();

      customRender(<MoviesList />);
      const deleteButton = screen.getByText("Delete");
      await user.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
