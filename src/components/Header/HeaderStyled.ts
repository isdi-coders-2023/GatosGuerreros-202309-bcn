import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.padding};
  display: flex;
  align-items: center;
  backdrop-filter: blur(2px);
  height: 96px;

  .header {
    &__title {
      font-family: ${({ theme }) => theme.typography.serif};
      color: ${({ theme }) => theme.colors.primary};
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
    }
  }
`;

export default HeaderStyled;
