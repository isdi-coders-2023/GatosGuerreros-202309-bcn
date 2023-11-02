import NavigationStyled from "./NavigationStyled";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <NavigationStyled>
      <ul className="nav__icons">
        <li className="icon__container">
          <NavLink className="nav__icon" to="/home">
            <img
              className="home__icon"
              alt="Home Icon"
              src={`images/icons/${
                pathname === "/home" ? "home-active-icon" : "home-icon"
              }.svg`}
            />
            <span className="icon__text">Home</span>
          </NavLink>
        </li>
        <li className="icon__container">
          <NavLink className="nav__icon" to="/add">
            <img
              className="home__icon"
              alt="Home Icon"
              src={`images/icons/${
                pathname === "/add" ? "add-active-icon" : "add-icon"
              }.svg`}
            />
            <span className="icon__text add">Add</span>
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default NavigationBar;
