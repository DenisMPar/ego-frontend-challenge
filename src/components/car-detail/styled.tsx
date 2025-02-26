import styled from "styled-components";

export const CarDetailRoot = styled.div`
  padding: 40px 0px 78px 0px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  @media screen and (min-width: 1024px) {
    gap: 59px;
  }
`;
export const CarDetailError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: calc(100vh - 238px);
  text-align: center;
  color: var(--red);
`;
