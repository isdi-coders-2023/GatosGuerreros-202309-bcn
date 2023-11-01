import NavigationStyled from "./NavigationStyled";
import ActiveHome from "../../../public/images/icons/home-active-icon.svg";
import Home from "../../../public/images/icons/home-icon.svg";
import ActiveAdd from "../../../public/images/icons/add-active-icon.svg";
import Add from "../../../public/images/icons/add-icon.svg";

interface NavigationProps {
  path: string;
}

const NavigationBar = ({ path }: NavigationProps): React.ReactElement => {
  const isHome = path === "home";
  const isAdd = path === "add";
  return (
    <NavigationStyled>
      <ul className="nav-icons">
        <li className="icon-container">
          <a className="nav-icon" href="/home">
            <img
              className="home-icon"
              alt={isHome ? "Home active icon" : "Home icon"}
              src={isHome ? ActiveHome : Home}
            />
            <span
              className="icon-text"
              style={isHome ? { color: "#e9F279" } : { color: "#fdfdf9" }}
            >
              Home
            </span>
          </a>
        </li>
        <li className="icon-container">
          <a className="nav-icon" href="/add">
            <img
              className="add-icon"
              alt={isAdd ? "Add active icon" : "Add icon"}
              src={isAdd ? ActiveAdd : Add}
            />
            <span
              className="icon-text"
              style={isAdd ? { color: "#e9F279" } : { color: "#fdfdf9" }}
            >
              Add
            </span>
          </a>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default NavigationBar;
