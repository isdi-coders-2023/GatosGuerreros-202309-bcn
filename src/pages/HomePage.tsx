import { useContext, useEffect } from "react";
import MoviesContext from "../features/movies/store/MoviesContext";
import MoviesList from "../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";
import useMoviesApi from "../hooks/useMoviesApi";
import UiContext from "../features/ui/store/UiContext";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const HomePage = (): React.ReactElement => {
  const { loadMovies } = useContext(MoviesContext);
  const { getMovies } = useMoviesApi();
  const { isLoading } = useContext(UiContext);

  useEffect(() => {
    (async () => {
      const actualMovies = await getMovies();

      loadMovies(await actualMovies);
    })();
  }, [getMovies, loadMovies]);

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
        <h2 className="hero__text main-container">
          The most curated repository of all Studio Ghibli films
        </h2>
        <img
          className="hero__symbol "
          src="/images/icons/scroll-down-symbol.webp"
          alt="scroll down to find the movies list"
          width={60}
          height={57.6}
        />
      </section>
      <section className="main-container">
        {isLoading && <LoadingScreen />}
        <MoviesList />
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
