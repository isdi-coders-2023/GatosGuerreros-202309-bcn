import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav__icons {
    display: flex;
    gap: 25px;

    .nav-icon {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__element {
        width: 30px;
        color: ${({ theme }) => theme.colors.primary};
      }

      &__add {
        margin-left: 2px;
      }

      &__home {
        margin-left: 5px;
      }

      &__text {
        font-family: ${({ theme }) => theme.typography.serif};
        font-size: 1rem;
      }
    }

    .active {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export default NavigationStyled;
