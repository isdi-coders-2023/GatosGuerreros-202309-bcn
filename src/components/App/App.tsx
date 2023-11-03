import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useEffect } from "react";
import Footer from "../Footer/Footer";

const App = (): React.ReactElement => {
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    (async () => {
      await getMovies();
    })();
  }, [getMovies]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer text={"© Ghiblipedia 2023"} />
    </>
  );
};

export default App;
