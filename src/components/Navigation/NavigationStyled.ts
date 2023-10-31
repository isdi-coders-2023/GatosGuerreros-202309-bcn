import styled from "styled-components";

const NavigationStyled = styled.nav`
  ul {
    display: flex;
    gap: 25px;
  }

  .icon-container,
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
  }

  .add-icon {
    width: 29px;
    padding-left: 3px;
  }

  .home-icon {
    width: 28px;
  }

  .icon-text {
    font-family: ${({ theme }) => theme.typography.serif};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    margin-top: -2px;
  }
`;

export default NavigationStyled;
