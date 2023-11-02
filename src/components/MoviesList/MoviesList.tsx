import { useContext } from "react";
import MoviesContext from "../../features/movies/store/MoviesContext";
import MoviesListStyled from "./MoviesListStyled";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = (): React.ReactElement => {
  const { movies } = useContext(MoviesContext);

  return (
    <MoviesListStyled className="movies-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movieCard={movie} />
        </li>
      ))}
    </MoviesListStyled>
  );
};
export default MoviesList;
