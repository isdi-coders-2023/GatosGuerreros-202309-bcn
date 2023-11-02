const HomePage = (): React.ReactElement => {
  return (
    <>
      <img
        src="/images/homepage-hero.webp"
        alt="imagen de Chihiro mirando al horizonte"
        width={320}
        height={652}
        className="hero-image"
      />
      <span className="hero__text">
        The most curated repository of all Studio Ghibli films
      </span>
      <img
        className="hero-symbol"
        src="/images/icons/scroll-down-symbol.svg"
        alt="scroll down to find the movies list"
        width={60}
        height={57.6}
      />
    </>
  );
};

export default HomePage;
