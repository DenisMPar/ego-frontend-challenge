import { useState } from "react";
import { Link, useLocation } from "react-router";
import { EgoIcon } from "../../../ui/icons";
import { HeaderMenuComponent } from "./menu";
import {
  HeaderIconButton,
  HeaderLogoWrapper,
  HeaderPageIndicator,
  HeaderPageIndicatorsContainer,
  HeaderRoot,
  StyledBurgerIcon,
} from "./styled";
import { AnimatePresence } from "framer-motion";

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <HeaderRoot>
      <HeaderLogoWrapper>
        <Link to="/">
          <EgoIcon />
        </Link>
        <HeaderPageIndicatorsContainer>
          <HeaderPageIndicator $active={pathname === "/" ? "true" : undefined}>
            Modelos
          </HeaderPageIndicator>
          <HeaderPageIndicator
            $active={pathname.startsWith("/model/") ? "true" : undefined}
          >
            Ficha de modelo
          </HeaderPageIndicator>
        </HeaderPageIndicatorsContainer>
      </HeaderLogoWrapper>
      <HeaderIconButton onClick={() => setIsOpen(true)}>
        <StyledBurgerIcon />
      </HeaderIconButton>
      <AnimatePresence>
        {isOpen && <HeaderMenuComponent handleClose={setIsOpen} />}
      </AnimatePresence>
    </HeaderRoot>
  );
}
