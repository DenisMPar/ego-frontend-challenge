import styled from "styled-components";

export const Chip = styled.button<{ $active?: string }>`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.08px;
  text-align: center;
  padding: 8px 12px;
  height: 31px;
  border-radius: 18px;
  background-color: ${(props) =>
    props.$active ? "var(--gray)" : "transparent"};
  cursor: pointer;
  &:hover {
    background-color: var(--gray);
  }
  &:focus-visible {
    outline: none;
  }
`;
