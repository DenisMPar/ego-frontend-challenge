import { useState } from "react";
import { BurgerMenuIcon, EgoIcon } from "../../../ui/icons";
import { HeaderMenuComponent } from "./menu";
import { HeaderIconButton, HeaderRoot } from "./styled";

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  console.log({ isOpen });

  return (
    <HeaderRoot>
      <EgoIcon />
      <HeaderIconButton onClick={() => setIsOpen(true)}>
        <BurgerMenuIcon />
      </HeaderIconButton>
      {isOpen && <HeaderMenuComponent handleClose={setIsOpen} />}
    </HeaderRoot>
  );
}
