import { ModelFeature } from "../../../lib/api/cars";
import { CardDetailFeatureCard } from "./feature-card";
import { CarDetailFeaturesRoot } from "./styled";
interface Props {
  features: ModelFeature[];
}
export function CarDetailFeatures({ features }: Props) {
  return (
    <CarDetailFeaturesRoot>
      {features.map((feature) => (
        <CardDetailFeatureCard feature={feature} />
      ))}
    </CarDetailFeaturesRoot>
  );
}
