import { Fragment } from "react/jsx-runtime";
import { ModelHighlight } from "../../../lib/api/cars";
import { CardDetailHighlightCard } from "./highlights-card";
import { CarDetailHighlightsRoot } from "./styled";
interface Props {
  highLights: ModelHighlight[];
}
export function CarDetailHighlights({ highLights }: Props) {
  return (
    <CarDetailHighlightsRoot>
      {highLights.map((feature, index) => (
        <Fragment key={feature.title}>
          <CardDetailHighlightCard
            feature={feature}
            imageRight={index % 2 === 0}
          />
        </Fragment>
      ))}
    </CarDetailHighlightsRoot>
  );
}
