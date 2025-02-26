import styled from "styled-components";
import { ArrowUpIcon } from "../../ui/icons";
import { motion } from "framer-motion";

export const DropDownRoot = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 23%;
  }
`;

export const DropDownArrow = styled(ArrowUpIcon)<{ $isOpen: boolean }>`
  transform: ${(props) => (props.$isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;
export const DropDownButton = styled.button<{ $justify: "left" | "right" }>`
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
  justify-self: ${(props) =>
    props.$justify === "left" ? "flex-start" : "flex-end"};
  &:focus-visible {
    outline: none;
  }
`;
export const DropDownList = styled(motion.ul)<{ $justify: "left" | "right" }>`
  width: 100%;
  max-width: 170px;
  position: absolute;
  top: 30px;
  right: ${(props) => (props.$justify === "left" ? "unset" : "0px")};
  left: ${(props) => (props.$justify === "left" ? "0px" : "unset")};
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

export const ListItem = styled(motion.li)<{ selected: boolean }>`
  padding: 16px 8px;
  background-color: ${(props) =>
    props.selected ? "var(--black-4)" : "var(--white)"};
  cursor: pointer;
  &:hover {
    background-color: var(--black-4);
  }
`;
export const DropDownSeparator = styled(motion.hr)`
  border-top: 1px solid var(--gray-3);
  margin: 0;
`;
