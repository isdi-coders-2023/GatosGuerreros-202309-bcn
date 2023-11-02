import { useContext, useEffect } from "react";
import MoviesContext from "../features/movies/store/MoviesContext";
import MoviesList from "../components/MoviesList/MoviesList";

const HomePage = (): React.ReactElement => {
  const { loadMovies } = useContext(MoviesContext);
  useEffect(() => {
    loadMovies([
      {
        description: "",
        director: "Hayao Miyazaki",
        id: 1,
        title: "My Neighbor Totoro",
        releaseDate: "",
        runningTime: "",
        movieBanner:
          "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
      },
      {
        description: "",
        director: "Isao Takahata",
        id: 2,
        title: "Only Yesterday",
        releaseDate: "",
        runningTime: "",
        movieBanner:
          "https://image.tmdb.org/t/p/w533_and_h300_bestv2/isCrlWWI4JrdLKAUAwFb5cjAsH4.jpg",
      },
    ]);
  }, [loadMovies]);
  return (
    <>
      <img
        src="/images/hero_picture.webp"
        alt="imagen de Chihiro mirando al horizonte"
        width={320}
        height={652}
      />
      <h2 className="hero__Text">
        The most curated repository of all Studio Ghibli films
      </h2>
      <span className="heroSymbol">↓</span>
      <MoviesList></MoviesList>
    </>
  );
};

export default HomePage;
