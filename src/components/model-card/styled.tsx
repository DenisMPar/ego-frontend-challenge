import styled from "styled-components";

export const ModelCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  max-width: 268px;
  max-height: 182px;
`;

export const ModelCardImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModelCardImage = styled.img`
  width: 243px;
  height: 120px;
  object-fit: scale-down;
`;
