import { PropsWithChildren, useCallback, useState, useMemo } from "react";
import MoviesContext from "./MoviesContext";
import { MovieStructureFiltered } from "../types";

const MoviesProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [movies, setMovies] = useState<MovieStructureFiltered[]>([]);

  const loadMovies = useCallback((movies: MovieStructureFiltered[]) => {
    setMovies(movies);
  }, []);

  const removeMovie = useCallback((movie: MovieStructureFiltered) => {
    const movieId = movie.id;
    setMovies((movies) => movies.filter((movie) => movie.id !== movieId));
  }, []);

  const moviesContextValue = useMemo(
    () => ({ movies, loadMovies, removeMovie }),
    [loadMovies, removeMovie, movies],
  );
  return (
    <MoviesContext.Provider value={moviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProviderWrapper;
