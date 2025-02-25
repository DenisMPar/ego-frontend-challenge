import { Body, TitleSecondary } from "../../../ui/tipography";
import {
  CarDetailHeroCaption,
  CarDetailHeroImage,
  CarDetailHeroRoot,
  CarDetailHeroTextContainer,
  CarDetailHeroTitleContainer,
} from "./styled";

export function CarDetailHero() {
  return (
    <CarDetailHeroRoot>
      <CarDetailHeroImage src="https://challenge.egodesign.dev/media/images/corolla_plata_metalico.width-600.png" />
      <CarDetailHeroTextContainer>
        <CarDetailHeroTitleContainer>
          <CarDetailHeroCaption>Hilux DX/SR</CarDetailHeroCaption>
          <TitleSecondary>Preparada para cualquier desafío </TitleSecondary>
        </CarDetailHeroTitleContainer>
        <Body>
          Mayor durabilidad, estabilidad, confort de marcha y mucha seguridad.
          Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum
          dolor.
        </Body>
      </CarDetailHeroTextContainer>
    </CarDetailHeroRoot>
  );
}
