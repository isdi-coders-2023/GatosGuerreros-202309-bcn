import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer text={"© Ghiblipedia 2023"} />
    </AppStyled>
  );
};

export default App;
