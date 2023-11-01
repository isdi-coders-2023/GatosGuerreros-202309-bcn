import { MovieStructureFiltered } from "../../features/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProps {
  movieCard: MovieStructureFiltered;
}

const MovieCard = ({
  movieCard: { title, movieBanner, director },
}: MovieCardProps): React.ReactElement => {
  return (
    <MovieCardStyled className="movie-card">
      <img
        className="movie-card__picture"
        src={movieBanner}
        alt={title}
        width=""
        height=""
      />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{title}</h2>
        <h3 className="movie-card__director">{director}</h3>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
