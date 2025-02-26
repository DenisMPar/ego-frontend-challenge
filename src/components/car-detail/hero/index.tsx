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
      <CarDetailHeroImage
        initial={{ left: "-100%", opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src={carFeatures.photo}
      />
      <CarDetailHeroTextContainer
        initial={{ top: "-100%", opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <CarDetailHeroTitleContainer>
          <CarDetailHeroCaption>{carFeatures.name}</CarDetailHeroCaption>
          <CarDetailHeroTitle>{carFeatures.title} </CarDetailHeroTitle>
        </CarDetailHeroTitleContainer>
        <Body>{bodyTextWithoutTags}</Body>
      </CarDetailHeroTextContainer>
    </CarDetailHeroRoot>
  );
}
