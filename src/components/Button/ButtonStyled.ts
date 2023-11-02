import styled from "styled-components";

const ButtonStyled = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 24px;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.typography.sansSerif};
  font-size: 1rem;
  font-weight: 500px;
  flex-shrink: 0;
  width: 90vw;
  height: 43px;
  text-align: center;

  &.button {
    &--inverted {
      background-color: ${({ theme }) => theme.colors.teriary};
      color: ${({ theme }) => theme.colors.secondary};
      border: solid 1px ${({ theme }) => theme.colors.secondary};
    }

    &--card-button {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.cardButton};
      line-height: 20px;
      letter-spacing: 0.1px;
      width: 21vw;
    }
  }
`;

export default ButtonStyled;
