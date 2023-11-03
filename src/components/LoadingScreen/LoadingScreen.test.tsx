import { screen } from "@testing-library/dom";
import { customRender } from "../../utils/customRender";
import LoadingScreen from "./LoadingScreen";

describe("Given a LoadingScreen component instance", () => {
  test("Then the loading modal is on the screen  ", async () => {
    const role = "alert";

    customRender(<LoadingScreen />);
    const expectedAlert = await screen.getByRole(role);

    expect(expectedAlert).toBeInTheDocument();
  });
});
