import { Link } from "react-router";
import styled from "styled-components";

export const ModelCardRoot = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  max-width: 268px;
  max-height: 182px;
  text-decoration: none;
  color: inherit;
  @media screen and (min-width: 1024px) {
    max-height: 215px;
  }
  &:hover {
    & h3 {
      color: var(--red);
    }
    & button {
      display: block;
    }
  }
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
export const ViewModelButtonContainer = styled.div`
  display: flex;
  height: 34px;
  width: 100%;
  max-width: 152px;
  & button {
    display: none;
  }
`;
