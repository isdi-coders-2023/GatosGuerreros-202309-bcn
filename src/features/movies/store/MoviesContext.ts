import { createContext } from "react";
import { MovieContextStructure } from "./types";

const MoviesContext = createContext<MovieContextStructure>(
  {} as MovieContextStructure,
);

export default MoviesContext;
