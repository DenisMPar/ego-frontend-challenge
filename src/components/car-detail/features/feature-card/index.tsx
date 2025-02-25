import { ModelFeature } from "../../../../lib/api/cars";
import { Body, TitleQuaternary } from "../../../../ui/tipography";
import {
  CarDetailFeaturesCardImage,
  CarDetailFeaturesCardRoot,
} from "./styled";

export function CardDetailFeatureCard({ feature }: { feature: ModelFeature }) {
  return (
    <CarDetailFeaturesCardRoot>
      <CarDetailFeaturesCardImage src={feature.image} />
      <TitleQuaternary>{feature.name}</TitleQuaternary>
      <Body>{feature.description}</Body>
    </CarDetailFeaturesCardRoot>
  );
}
