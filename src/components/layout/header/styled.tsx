import styled from "styled-components";
import { BurgerMenuIcon } from "../../../ui/icons";

export const HeaderRoot = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--gray-6);
  position: sticky;
  top: 0;
  background: white;
  z-index: 4;
  @media screen and (min-width: 1024px) {
    padding: 16px 35px;
  }
`;
export const HeaderIconButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.08px;
  color: var(--black-2);
  cursor: pointer;
  &:focus-visible {
    outline: none;
  }
`;

export const StyledBurgerIcon = styled(BurgerMenuIcon)`
  &:hover {
    fill: var(--black-3);
  }
`;
export const HeaderLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 405px;
`;
export const HeaderPageIndicatorsContainer = styled.div`
  display: none;
  position: absolute;
  left: 150px;
  max-width: 288px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const HeaderPageIndicator = styled.div<{ $active?: string }>`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  color: ${({ $active }) => ($active ? "var(--red)" : "var(--black-1)")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: ${({ $active }) => ($active ? "4px solid var(--red)" : "")};
  cursor: default;
`;
