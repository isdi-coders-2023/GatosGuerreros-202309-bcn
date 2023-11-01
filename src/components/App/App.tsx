import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MoviesList from "../MoviesList/MoviesList";

const App = (): React.ReactElement => {
  return (
    <>
      <MoviesList></MoviesList>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
