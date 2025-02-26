import { ModelFeature } from "../../../../lib/api/cars";
import { Body, TitleQuaternary } from "../../../../ui/tipography";
import {
  CarDetailFeaturesCardImage,
  CarDetailFeaturesCardRoot,
  CarDetailFeaturesCardTextContainer,
} from "./styled";

export function CardDetailFeatureCard({
  feature,
  imageRight,
}: {
  feature: ModelFeature;
  imageRight: boolean;
}) {
  return (
    <CarDetailFeaturesCardRoot $imageRight={imageRight}>
      <CarDetailFeaturesCardImage src={feature.image} />
      <CarDetailFeaturesCardTextContainer>
        <TitleQuaternary>{feature.name}</TitleQuaternary>
        <Body>{feature.description}</Body>
      </CarDetailFeaturesCardTextContainer>
    </CarDetailFeaturesCardRoot>
  );
}
