import { MovieStructureFiltered } from "../types";

export interface MovieContextStructure {
  movies: MovieStructureFiltered[];
  loadMovies: (movies: MovieStructureFiltered[]) => void;
}
