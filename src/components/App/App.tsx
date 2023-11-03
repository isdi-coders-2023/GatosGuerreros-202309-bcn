import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import useMoviesApi from "../../hooks/useMoviesApi";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
