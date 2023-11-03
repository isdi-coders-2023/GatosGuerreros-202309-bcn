import { NavLink } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h2 className="not-found__alert">Oops!</h2>
      <div className="not-found__container">
        <span className="not-found__error">It's just a 404 Error!</span>
        <span className="not-found__feedback">
          What you’re looking for may have been misplaced in Long Term Memory.
        </span>
        <NavLink to="/home" className="not-found__button">
          Go Home
        </NavLink>
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
