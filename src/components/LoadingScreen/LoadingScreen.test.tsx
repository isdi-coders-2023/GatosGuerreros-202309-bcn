import { screen } from "@testing-library/dom";
import { customRender } from "../../utils/customRender";
import LoadingScreen from "./LoadingScreen";

describe("Given a LoadingScreen component instance", () => {
  test("Then the totoro dancing gif is on the screen  ", async () => {
    const altText = "Totoro dancing with a hula-hoop";

    customRender(<LoadingScreen />);
    const expectedAltText = await screen.findByAltText(altText);

    expect(expectedAltText).toBeInTheDocument();
  });
});
