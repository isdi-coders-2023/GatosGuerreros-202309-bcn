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
              width="30px"
              height="27px"
              className="nav-icon__home"
              alt="Home Icon"
              src={`images/icons/${
                pathname === "/home" ? "homeActiveIcon" : "homeIcon"
              }.svg`}
            />
            <span className="nav-icon__text">Home</span>
          </NavLink>
        </li>
        <li className="nav-icon">
          <NavLink className="nav-icon__element" to="/add">
            <img
              width="27px"
              height="27px"
              className="nav-icon__add"
              alt="Home Icon"
              src={`images/icons/${
                pathname === "/add" ? "addActiveIcon" : "addIcon"
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
