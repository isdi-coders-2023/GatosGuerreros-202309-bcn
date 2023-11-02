import LoadingScreenStyled from "./LoadingScreenStyled";

const LoadingScreen = () => {
  return (
    <LoadingScreenStyled className="loading-screen">
      <div className="loading-screen__spinner">
        <img
          src="/images/totoro-hula-hoop.gif"
          alt="Totoro dancing with a hula-hoop"
          height="50"
          width="50"
        />{" "}
      </div>
      <span className="loading-screen__loading-message"> Loading!</span>
    </LoadingScreenStyled>
  );
};

export default LoadingScreen;
