import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const App = (): React.ReactElement => {
  return (
    <>
      <div></div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
