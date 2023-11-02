import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav__icons {
    display: flex;
    gap: 25px;
  }

  .icon__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav__icon {
    width: 30px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .active {
    color: ${({ theme }) => theme.colors.accent};
  }

  .add__icon {
    margin-left: 2px;
  }

  .home__icon {
    margin-left: 5px;
  }

  .icon__text {
    font-family: ${({ theme }) => theme.typography.serif};
    font-size: 1rem;
    /* padding-left: 2px; */
  }
`;

export default NavigationStyled;
