import styled from "styled-components";

const AppStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.sansSerif};
  font-weight: 600;
  font-style: italic;
`;

export default AppStyled;
