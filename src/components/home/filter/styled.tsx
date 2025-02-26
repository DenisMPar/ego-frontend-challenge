import styled from "styled-components";
import { DropDownComponent } from "../../drop-down";

export const FilterRoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--gray-3);
  padding-bottom: 14px;
`;

export const TypeFilterMobile = styled(DropDownComponent)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const NavFilter = styled.div`
  display: none;
  align-items: center;
  gap: 20px;
  flex-grow: 4;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
