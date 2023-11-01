import { PropsWithChildren, useCallback, useState } from "react";
import MoviesContext from "./MoviesContext";
import { MovieStructureFiltered } from "../types";

const MoviesProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [movies, setMovies] = useState<MovieStructureFiltered[]>([]);

  const loadMovies = useCallback((movies: MovieStructureFiltered[]) => {
    setMovies(movies);
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, loadMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProviderWrapper;
