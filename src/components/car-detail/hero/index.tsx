import { CarFeatures } from "../../../lib/api/cars";
import { Body } from "../../../ui/tipography";
import {
  CarDetailHeroCaption,
  CarDetailHeroImage,
  CarDetailHeroRoot,
  CarDetailHeroTextContainer,
  CarDetailHeroTitle,
  CarDetailHeroTitleContainer,
} from "./styled";

interface Props {
  carFeatures: CarFeatures;
}

export function CarDetailHero({ carFeatures }: Props) {
  const bodyTextWithoutTags = carFeatures.description.replace(
    /(<([^>]+)>)/gi,
    ""
  );
  return (
    <CarDetailHeroRoot>
      <CarDetailHeroImage src={carFeatures.photo} />
      <CarDetailHeroTextContainer>
        <CarDetailHeroTitleContainer>
          <CarDetailHeroCaption>{carFeatures.name}</CarDetailHeroCaption>
          <CarDetailHeroTitle>{carFeatures.title} </CarDetailHeroTitle>
        </CarDetailHeroTitleContainer>
        <Body>{bodyTextWithoutTags}</Body>
      </CarDetailHeroTextContainer>
    </CarDetailHeroRoot>
  );
}
