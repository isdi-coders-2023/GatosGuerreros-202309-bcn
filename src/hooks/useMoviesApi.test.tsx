import { renderHook } from "@testing-library/react";
import { MovieStructureFiltered } from "../features/movies/types";
import useMoviesApi from "./useMoviesApi";
import UiContextWrapper from "../features/ui/store/UiContextWrapper";

describe("Given hook 'useMovieApi' ", () => {
  describe("when it's fetching from Api", async () => {
    test("Then first position of the array should be title: Castle in the Sky", async () => {
      const expectedMovies: MovieStructureFiltered[] = [
        {
          id: 1,
          title: "Castle in the Sky",
          movieBanner:
            "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
          description:
            "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
          director: "Hayao Miyazaki",
          releaseDate: "1986",
          runningTime: "124",
        },
        {
          id: 2,
          title: "Grave of the Fireflies",
          movieBanner:
            "https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg",
          description:
            "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
          director: "Isao Takahata",
          releaseDate: "1988",
          runningTime: "89",
        },
      ];

      const { result } = renderHook(() => useMoviesApi(), {
        wrapper: ({ children }) => (
          <UiContextWrapper>{children}</UiContextWrapper>
        ),
      });

      const loadMovies = async () => {
        const movies = await result.current.getMovies();

        return movies;
      };

      const movies = await loadMovies();

      expect(movies).toStrictEqual(expectedMovies);
    });
  });
});
