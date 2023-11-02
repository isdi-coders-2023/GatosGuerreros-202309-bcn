import { useContext, useEffect } from "react";
import MoviesContext from "../features/movies/store/MoviesContext";
import MoviesList from "../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  const { loadMovies } = useContext(MoviesContext);
  useEffect(() => {
    loadMovies([
      {
        description: "",
        director: "Hayao Miyazaki",
        id: 1,
        title: "My Neighbor Totoro",
        release_date: "",
        running_time: "",
        movie_banner:
          "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
      },
      {
        description: "",
        director: "Isao Takahata",
        id: 2,
        title: "Only Yesterday",
        release_date: "",
        running_time: "",
        movie_banner:
          "https://image.tmdb.org/t/p/w533_and_h300_bestv2/isCrlWWI4JrdLKAUAwFb5cjAsH4.jpg",
      },
    ]);
  }, [loadMovies]);
  return (
    <HomePageStyled>
      <section className="hero">
        <img
          src="/images/homepage-hero.webp"
          alt="Chihiro looking to the horizon"
          width={320}
          height={652}
          className="hero__image"
        />
        <h2 className="hero__text">
          The most curated repository of all Studio Ghibli films
        </h2>
        <img
          className="hero__symbol"
          src="/images/icons/scroll-down-symbol.svg"
          alt="scroll down to find the movies list"
          width={60}
          height={57.6}
        />
      </section>
      <MoviesList />
    </HomePageStyled>
  );
};

export default HomePage;
