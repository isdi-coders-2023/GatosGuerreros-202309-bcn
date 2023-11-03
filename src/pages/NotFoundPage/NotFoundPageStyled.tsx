import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 90px 16px;

  .not-found {
    &__alert {
      padding: 0 16px;
      font-family: ${({ theme }) => theme.typography.serif};
      font-style: italic;
      font-size: 2.063rem;
      color: ${({ theme }) => theme.colors.secondary};
      padding-bottom: 30px;
    }

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    &__error {
      padding: 24px 16px;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      border-radius: ${({ theme }) => theme.borderRadius};
      font-family: ${({ theme }) => theme.typography.sansSerif};
      font-size: 1.563rem;
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
    }

    &__feedback {
      padding: 0 16px;
      font-family: ${({ theme }) => theme.typography.sansSerif};
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.secondary};
      text-align: justify;
    }
    &__button {
      width: 100%;
      padding: 16px 0;
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: ${({ theme }) => theme.borderRadius};
      font-size: 1rem;
      justify-content: center;
    }
  }
`;

export default NotFoundPageStyled;
