import { PropsWithChildren, useCallback, useState } from "react";
import MoviesContext from "./MoviesContext";
import { MovieStructure } from "./types";

const MovieProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [movies, setMovies] = useState<MovieStructure[]>([]);

  const loadMovies = useCallback((movies: MovieStructure[]) => {
    setMovies(movies);
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, loadMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MovieProviderWrapper;
