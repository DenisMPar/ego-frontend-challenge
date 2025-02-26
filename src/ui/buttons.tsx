import styled from "styled-components";

export const ButtonLink = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 20px;
  color: var(--black);
  cursor: pointer;
  &:focus-visible {
    outline: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const ButtonRounded = styled.button`
  border: none;
  background-color: var(--black-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 13px;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  padding: 8px 12px;
  width: 100%;
  height: 34px;
  &:focus-visible {
    outline: none;
  }
  &:hover {
    background-color: var(--black-2);
  }
`;
