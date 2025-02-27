import { ButtonLink } from "../../../../ui/buttons";
import { CloseIcon } from "../../../../ui/icons";
import {
  HeaderMenuButton,
  HeaderMenuList,
  HeaderMenuRoot,
  HeaderMenuSeparator,
  HeaderMenuWrapper,
  StyledLink,
} from "./styled";

export function HeaderMenuComponent({
  handleClose,
}: {
  handleClose: (isOpen: boolean) => void;
}) {
  return (
    <HeaderMenuRoot
      initial={{ right: "-100%", opacity: 0 }}
      animate={{ right: 0, opacity: 1 }}
      exit={{ right: "-100%", opacity: 0 }}
    >
      <HeaderMenuButton onClick={() => handleClose(false)}>
        Cerrar <CloseIcon />
      </HeaderMenuButton>
      <HeaderMenuWrapper>
        <HeaderMenuList>
          <StyledLink to="/" onClick={() => handleClose(false)}>
            <ButtonLink>Modelos</ButtonLink>
          </StyledLink>
          <ButtonLink>Servicios y accesorios</ButtonLink>
          <ButtonLink>Financiacion</ButtonLink>
          <ButtonLink>Reviews y comunidad</ButtonLink>
        </HeaderMenuList>
        <HeaderMenuSeparator />
        <HeaderMenuList>
          <ButtonLink>Toyota Mobility Service</ButtonLink>
          <ButtonLink>Toyota Gazoo Racing</ButtonLink>
          <ButtonLink>Toyota Híbridos</ButtonLink>
        </HeaderMenuList>
        <HeaderMenuSeparator dark />
        <HeaderMenuList>
          <ButtonLink>Concesionarios</ButtonLink>
          <ButtonLink>Test Drive</ButtonLink>
          <ButtonLink>Contacto</ButtonLink>
        </HeaderMenuList>
      </HeaderMenuWrapper>
      <HeaderMenuWrapper __dark>
        <HeaderMenuList>
          <ButtonLink>Actividades</ButtonLink>
          <ButtonLink>Servicios al Cliente</ButtonLink>
          <ButtonLink>Ventas Especiales</ButtonLink>
          <ButtonLink>Innovación</ButtonLink>
          <ButtonLink>Prensa</ButtonLink>
          <ButtonLink>Acerca de...</ButtonLink>
        </HeaderMenuList>
      </HeaderMenuWrapper>
    </HeaderMenuRoot>
  );
}
