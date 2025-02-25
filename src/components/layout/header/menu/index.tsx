import { ButtonLink } from "../../../../ui/buttons";
import { CloseIcon } from "../../../../ui/icons";
import {
  HeaderMenuButton,
  HeaderMenuList,
  HeaderMenuRoot,
  HeaderMenuSeparator,
  HeaderMenuWrapper,
} from "./styled";

export function HeaderMenuComponent({
  handleClose,
}: {
  handleClose: (isOpen: boolean) => void;
}) {
  return (
    <HeaderMenuRoot>
      <HeaderMenuButton onClick={() => handleClose(false)}>
        Cerrar <CloseIcon />
      </HeaderMenuButton>
      <HeaderMenuWrapper>
        <HeaderMenuList>
          <ButtonLink>Modelos</ButtonLink>
          <ButtonLink>setvicios y accesorios</ButtonLink>
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
