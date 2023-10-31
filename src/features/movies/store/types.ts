export interface MovieStructure {
  id: number;
  title: string;
  movie_banner: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
}

export interface MovieContextStructure {
  movies: MovieStructure[];
  loadMovies: (movies: MovieStructure[]) => void;
}
