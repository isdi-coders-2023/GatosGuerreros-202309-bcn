import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MoviesList from "../MoviesList/MoviesList";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <MoviesList></MoviesList>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
