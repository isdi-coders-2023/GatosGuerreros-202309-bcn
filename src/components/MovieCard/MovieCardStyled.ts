import styled from "styled-components";

const MovieCardStyled = styled.article`
  .movie-card {
    &__picture {
      border-radius: ${({ theme }) => theme.borderRadius};
    }

    &__info {
      background-color: rgba(0, 0, 0, 0.4);
    }

    &__title {
      color: ${({ theme }) => theme.colors.primary};
    }

    &__director {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 1rem;
    }
  }
`;
export default MovieCardStyled;
