import LoadingScreenStyled from "./LoadingScreenStyled";

const LoadingScreen = () => {
  return (
    <LoadingScreenStyled className="loading-screen" role="alert">
      <div className="loading-screen__spinner">
        <video autoPlay loop muted playsInline height={150} width={150}>
          <source src="images/totoroHulaHoop.webm" type="video/webm" />
          <track
            typeof="description"
            content="Totoro dancing with a hoola hoop"
          />
        </video>
      </div>
      <span className="loading-screen__loading-message"> Loading!</span>
    </LoadingScreenStyled>
  );
};

export default LoadingScreen;
