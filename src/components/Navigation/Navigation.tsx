import NavigationStyled from "./NavigationStyled";

interface NavigationProps {
  isActive: boolean;
}

const NavigationBar = ({ isActive }: NavigationProps): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul>
        <li className="icon-container">
          <a className="home-icon" href="index.html">
            <img
              alt={isActive ? "Home active icon" : "Home icon"}
              src={
                isActive
                  ? "public/images/icons/home-active-icon.svg"
                  : "public/images/icons/home-icon.svg"
              }
            />
          </a>
          <span
            className="icon-text"
            style={isActive ? { color: "#e9F279" } : { color: "#fdfdf9" }}
          >
            Home
          </span>
        </li>
        <li className="icon-container">
          <a className="add-icon" href="index.html">
            <img
              alt={isActive ? "Add icon" : "Add  active icon"}
              src={
                isActive
                  ? "public/images/icons/add-icon.svg"
                  : "public/images/icons/add-active-icon.svg"
              }
            />
          </a>
          <span
            className="icon-text"
            style={isActive ? { color: "#fdfdf9" } : { color: "#e9F279" }}
          >
            Add
          </span>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default NavigationBar;
