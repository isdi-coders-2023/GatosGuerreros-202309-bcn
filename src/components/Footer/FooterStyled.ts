import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  padding: 25px 68px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer {
    &__copyright-notice {
      color: white;
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      letter-spacing: 0.1px;
      white-space: nowrap;
    }

    &__icons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 26px;
    }
  }
`;

export default FooterStyled;
