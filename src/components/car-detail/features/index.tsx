import { CardDetailFeatureCard } from "./feature-card";
import { CarDetailFeaturesRoot } from "./styled";

export function CarDetailFeatures() {
  return (
    <CarDetailFeaturesRoot>
      <CardDetailFeatureCard />
      <CardDetailFeatureCard />
    </CarDetailFeaturesRoot>
  );
}
