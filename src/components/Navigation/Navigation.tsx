import NavigationStyled from "./NavigationStyled";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <NavigationStyled>
      <ul className="nav__icons">
        <li className="nav-icon">
          <NavLink className="nav-icon__element" to="/home">
            <img
              className="nav-icon__home"
              alt="Home Icon"
              src={`images/icons/${
                pathname === "/home" ? "home-active-icon" : "home-icon"
              }.svg`}
            />
            <span className="nav-icon__text">Home</span>
          </NavLink>
        </li>
        <li className="nav-icon">
          <NavLink className="nav-icon__element" to="/add">
            <img
              className="nav-icon__add"
              alt="Home Icon"
              src={`images/icons/${
                pathname === "/add" ? "add-active-icon" : "add-icon"
              }.svg`}
            />
            <span className="nav-icon__text add">Add</span>
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default NavigationBar;
