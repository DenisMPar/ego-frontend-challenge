import styled from "styled-components";

export const HeaderMenuRoot = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow: auto;
  padding: 0;
  padding-top: 18px;
  top: 70px;
  right: 0;
  z-index: 1;
  background: white;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const HeaderMenuWrapper = styled.div<{ __dark?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${(props) =>
    props.__dark ? "var(--gray-2)" : "var(--white)"};
  padding: 31px 20px;
  padding-bottom: ${({ __dark }) => (__dark ? "55px" : "31px")};
`;
export const HeaderMenuBottom = styled.div`
  display: flex;
  background-color: var(--gray-2);
`;

export const HeaderMenuList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
  gap: 13px;
  padding: 0;
  padding-right: 33px;
  margin: 0;
  z-index: 1;
`;

export const ListItem = styled.li<{ selected: boolean }>`
  padding: 16px 8px;
  background-color: ${(props) =>
    props.selected ? "var(--black-4)" : "var(--white)"};
`;
export const HeaderMenuSeparator = styled.hr<{ dark?: boolean }>`
  border-top: 1px solid
    ${(props) => (props.dark ? "var(--gray-5)" : "var( --gray-4)")};
  margin: 31px 0;
  width: 100%;
`;

export const HeaderMenuButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.08px;
  color: var(--black-2);
  margin-right: 25px;
  align-self: flex-end;
  &:focus-visible {
    outline: none;
  }
`;
