import styled from "styled-components";
import { ArrowUpIcon } from "../../ui/icons";

export const DropDownRoot = styled.div`
  position: relative;
  width: 100%;
`;

export const DropDownArrow = styled(ArrowUpIcon)<{ __isOpen: boolean }>`
  transform: ${(props) => (props.__isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;
export const DropDownButton = styled.button<{ __justify: "left" | "right" }>`
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
  justify-self: ${(props) =>
    props.__justify === "left" ? "flex-start" : "flex-end"};
  &:focus-visible {
    outline: none;
  }
`;
export const DropDownList = styled.ul<{ __justify: "left" | "right" }>`
  width: 100%;
  max-width: 158px;
  position: absolute;
  top: 30px;
  right: ${(props) => (props.__justify === "left" ? "unset" : "0px")};
  left: ${(props) => (props.__justify === "left" ? "0px" : "unset")};
  box-shadow: 2px 8px 20px 0px #00000026;
  background: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

export const ListItem = styled.li<{ selected: boolean }>`
  padding: 16px 8px;
  background-color: ${(props) =>
    props.selected ? "var(--black-4)" : "var(--white)"};
`;
export const DropDownSeparator = styled.hr`
  border-top: 1px solid var(--gray-3);
  margin: 0;
`;
