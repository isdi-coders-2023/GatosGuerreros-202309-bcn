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

  const moviesContextValue = useMemo(
    () => ({ movies, loadMovies }),
    [loadMovies, movies],
  );
  return (
    <MoviesContext.Provider value={moviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProviderWrapper;
