import { Fragment } from "react/jsx-runtime";
import { ModelFeature } from "../../../lib/api/cars";
import { CardDetailFeatureCard } from "./feature-card";
import { CarDetailFeaturesRoot } from "./styled";
interface Props {
  features: ModelFeature[];
}
export function CarDetailFeatures({ features }: Props) {
  return (
    <CarDetailFeaturesRoot>
      {features.map((feature, index) => (
        <Fragment key={feature.description}>
          <CardDetailFeatureCard
            feature={feature}
            imageRight={index % 2 === 0}
          />
        </Fragment>
      ))}
    </CarDetailFeaturesRoot>
  );
}
