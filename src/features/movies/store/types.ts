import { MovieStructure } from "../types";

export interface MovieContextStructure {
  movies: MovieStructure[];
  loadMovies: (movies: MovieStructure[]) => void;
}
