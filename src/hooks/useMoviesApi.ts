import { useCallback } from "react";
import { useLoading } from "./useLoading";

import {
  MovieStructure,
  MovieStructureFiltered,
} from "../features/movies/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useMoviesApi = () => {
  const { activateLoading, disableLoading } = useLoading();

  const getMovies = useCallback(async () => {
    activateLoading();
    const response = await fetch(apiUrl);
    const movies = (await response.json()) as MovieStructure[];

    const filteredMovies = movies.map(
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
    disableLoading();
    return filteredMovies;
  }, [activateLoading, disableLoading]);

  return {
    getMovies,
  };
};

export default useMoviesApi;
