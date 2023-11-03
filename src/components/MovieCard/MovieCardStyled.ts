import styled from "styled-components";

const MovieCardStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50vh;

  .movie-card {
    &__picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.borderRadius};
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 40%;
      top: 60%;
      padding: 16px;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 0px 0px 5px 5px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &__title {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.35rem;
    }

    &__director {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 1rem;
    }
  }
`;
export default MovieCardStyled;
