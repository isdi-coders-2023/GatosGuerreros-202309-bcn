import { useContext } from "react";
import MoviesContext from "../../features/movies/store/MoviesContext";
import MoviesListStyled from "./MoviesListStyled";

const MovieList = (): React.ReactElement => {
  const { movies } = useContext(MoviesContext);

  return (
    <MoviesListStyled className="movies-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <div className="movie-card"></div>
        </li>
      ))}
    </MoviesListStyled>
  );
};
export default MovieList;
