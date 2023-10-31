import { useContext } from "react";
import MoviesContext from "../../features/movies/store/MoviesContext";

const MovieList = (): React.ReactElement => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <div className="movie-card"></div>
        </li>
      ))}
    </div>
  );
};
export default MovieList;
