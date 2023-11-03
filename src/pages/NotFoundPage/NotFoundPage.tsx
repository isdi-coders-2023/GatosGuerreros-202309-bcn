import { NavLink } from "react-router-dom";

const NotFoundPage = (): React.ReactElement => {
  return (
    <>
      <h2 className="not-found__alert">Oops!</h2>
      <span className="not-found__span">It's just a 404 Error!</span>
      <span className="not-found__feedback">
        What you’re looking for may have been misplaced in Long Term Memory.
      </span>
      <NavLink to="/home" className="not-found__button">
        Go Home
      </NavLink>
    </>
  );
};

export default NotFoundPage;
