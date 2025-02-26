import styled from "styled-components";

export const SkeletonRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  gap: 38px;
  @media screen and (min-width: 1024px) {
    gap: 80px;
  }
`;

export const SkeletonContainerMobile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 11px;
  padding: 0px 15px;
  max-width: 330px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const SkeletonContainerDesktop = styled.div`
  width: 100%;
  height: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 118px;
  padding: 0px 15px;
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
