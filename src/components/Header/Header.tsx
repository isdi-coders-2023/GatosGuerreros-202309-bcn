import NavigationBar from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";
import React from "react";

interface NavigationProps {
  path: string;
}

const Header = ({ path }: NavigationProps): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Ghiblipedia</h1>
      <NavigationBar path={path} />
    </HeaderStyled>
  );
};

export default Header;
