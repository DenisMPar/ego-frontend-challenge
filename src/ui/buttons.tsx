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
  &:focus-visible {
    outline: none;
  }
`;
