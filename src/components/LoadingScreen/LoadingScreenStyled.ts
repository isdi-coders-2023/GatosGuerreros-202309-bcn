import styled from "styled-components";

const LoadingScreenStyled = styled.div`
  background-color: #fcfefc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;

  .loading-screen {
    &__loading-message {
      font-family: ${({ theme }) => theme.typography.serif};
      font-style: italic;
      font-size: 2.25rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary};
    }

    &__spinner img {
      height: 48.75vw;
      width: auto;
    }
  }

  @media (prefers-reduced-motion) {
    .loading-screen {
      &__spinner img {
        height: 48.75vw;
        width: auto;
        content: url("/images/loading-image-no-animations.png");
      }
    }
  }
`;

export default LoadingScreenStyled;
