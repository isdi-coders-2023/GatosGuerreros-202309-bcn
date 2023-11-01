import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav-icons {
    display: flex;
    gap: 25px;
  }

  .icon-container,
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-icon {
    width: 30px;
  }

  .add-icon {
    margin-left: 2px;
  }

  .home-icon {
    margin-left: 5px;
  }

  .icon-text {
    font-family: ${({ theme }) => theme.typography.serif};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
  }
`;

export default NavigationStyled;
