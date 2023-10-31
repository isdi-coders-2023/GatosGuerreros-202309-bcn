export interface MovieStructure {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
}

export interface MovieContextStructure {
  movies: MovieStructure[];
  loadMovies: (movies: MovieStructure[]) => void;
}
