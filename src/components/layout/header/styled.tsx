import styled from "styled-components";

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
  &:focus-visible {
    outline: none;
  }
`;
