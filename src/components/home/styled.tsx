import styled from "styled-components";

export const HomeRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
  padding: 40px 15px 70px 15px;
  min-height: calc(100vh - 120px);
  @media screen and (min-width: 1024px) {
    padding: 85px 40px 100px 40px;
    gap: 72px;
    align-items: flex-start;
  }
`;
