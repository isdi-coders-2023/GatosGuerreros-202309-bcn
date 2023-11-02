import { useCallback, useContext } from "react";
import {
  MovieStructure,
  MovieStructureFiltered,
} from "../features/movies/types";
import MoviesContext from "../features/movies/store/MoviesContext";

const useMoviesApi = () => {
  const { loadMovies } = useContext(MoviesContext);

  const apiUrl = "https://api-ghiblipedia.onrender.com/items";

  const getMovies = useCallback(async () => {
    const response = await fetch(apiUrl);
    const movies = (await response.json()) as MovieStructure[];

    const filterMovies = movies.map(
      (movie): MovieStructureFiltered => ({
        movieBanner: movie.movie_banner,
        id: movie.id,
        description: movie.description,
        director: movie.director,
        title: movie.title,
        releaseDate: movie.release_date,
        runningTime: movie.running_time,
      }),
    );

    loadMovies(filterMovies);
  }, [apiUrl, loadMovies]);

  return {
    getMovies,
  };
};

export default useMoviesApi;
