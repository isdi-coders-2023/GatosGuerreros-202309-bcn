import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MoviesList from "../MoviesList/MoviesList";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  const path = window.location.pathname;
  return (
    <>
      <Header path={path} />
      <MoviesList></MoviesList>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
