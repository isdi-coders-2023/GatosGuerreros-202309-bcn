import { useContext } from "react";
import { MovieStructureFiltered } from "../../features/movies/types";
import Button from "../Button/Button";
import MovieCardStyled from "./MovieCardStyled";
import MoviesContext from "../../features/movies/store/MoviesContext";

interface MovieCardProps {
  movieCard: MovieStructureFiltered;
  movie: MovieStructureFiltered;
}
const MovieCard = ({
  movieCard: { title, movieBanner, director },
  movie,
}: MovieCardProps): React.ReactElement => {
  const { removeMovie } = useContext(MoviesContext);

  return (
    <MovieCardStyled className="movie-card">
      <img
        className="movie-card__picture"
        src={movieBanner}
        alt={title}
        width={295}
        height={265}
      />
      <div className="movie-card__footer">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{title}</h2>
          <h3 className="movie-card__director">{director}</h3>
        </div>
        <Button
          className={"button--card-button"}
          text={"Delete"}
          actionOnClick={() => removeMovie(movie)}
        ></Button>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
