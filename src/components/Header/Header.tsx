import NavigationBar from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";
import React from "react";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Ghiblipedia</h1>
      <NavigationBar />
    </HeaderStyled>
  );
};

export default Header;
