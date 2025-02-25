import { CarFeatures } from "../../../lib/api/cars";
import { Body, TitleSecondary } from "../../../ui/tipography";
import {
  CarDetailHeroCaption,
  CarDetailHeroImage,
  CarDetailHeroRoot,
  CarDetailHeroTextContainer,
  CarDetailHeroTitleContainer,
} from "./styled";

interface Props {
  carFeatures: CarFeatures;
}

export function CarDetailHero({ carFeatures }: Props) {
  return (
    <CarDetailHeroRoot>
      <CarDetailHeroImage src={carFeatures.photo} />
      <CarDetailHeroTextContainer>
        <CarDetailHeroTitleContainer>
          <CarDetailHeroCaption>{carFeatures.name}</CarDetailHeroCaption>
          <TitleSecondary>{carFeatures.title} </TitleSecondary>
        </CarDetailHeroTitleContainer>
        <Body>{carFeatures.description.replace(/(<([^>]+)>)/gi, "")}</Body>
      </CarDetailHeroTextContainer>
    </CarDetailHeroRoot>
  );
}
