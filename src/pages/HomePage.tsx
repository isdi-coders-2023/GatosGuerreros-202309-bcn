const HomePage = (): React.ReactElement => {
  return (
    <>
      <img
        src="/images/hero_picture.webp"
        alt="foto de la homep"
        width={320}
        height={652}
      />
      <h3 className="hero__Text">
        The most curated repository of all Studio Ghibli films
      </h3>
      <span className="heroSymbol">↓</span>
    </>
  );
};

export default HomePage;
