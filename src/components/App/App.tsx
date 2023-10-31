import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MovieList from "../MoviesList/MoviesList";

const App = (): React.ReactElement => {
  return (
    <>
      <MovieList></MovieList>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
