import styled from "styled-components";

const HomePageStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.teriary};

  .main-container {
    padding: 0 16px;
  }

  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image {
      width: 100%;
      height: auto;
    }

    &__text {
      font-family: ${({ theme }) => theme.typography.serif};
      font-size: 1.25rem;
      font-style: italic;
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      position: absolute;
      top: 75%;
    }

    &__symbol {
      width: 15%;
      height: auto;
      align-items: center;
      position: absolute;
      top: 85%;
    }
  }
`;

export default HomePageStyled;
