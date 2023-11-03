import { screen } from "@testing-library/react";
import MoviesList from "./MoviesList";
import { customRender } from "../../utils/customRender";

import HomePage from "../../pages/HomePage/HomePage";
import userEvent from "@testing-library/user-event";

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
  describe("When MovieCards load", () => {
    test("Then 'Delete' button is on screen", async () => {
      const user = userEvent.setup();
      customRender(
        <>
          <HomePage />
          <MoviesList />
        </>,
      );
      const deleteButton = await screen.findAllByRole("button");
      await user.click(deleteButton[0]);
      expect(deleteButton[0]).not.toBeInTheDocument();
    });
  });
});
