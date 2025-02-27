import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ModelHighlight } from "../../../../lib/api/cars";
import { Body, TitleQuaternary } from "../../../../ui/tipography";
import {
  CarDetailHighlightsCardImage,
  CarDetailHighlightsCardRoot,
  CarDetailHighlightsCardTextContainer,
} from "./styled";

export function CardDetailHighlightCard({
  feature,
  imageRight,
}: {
  feature: ModelHighlight;
  imageRight: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const bodyTextWithoutTags = feature.content.replace(/<[^>]*>/g, "");

  return (
    <CarDetailHighlightsCardRoot $imageRight={imageRight} ref={ref}>
      <AnimatePresence>
        <CarDetailHighlightsCardImage
          key={`image-${feature.title}`}
          initial={{ opacity: 0, x: `${imageRight ? -100 : 100}%`, scale: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : `${imageRight ? 100 : -100}%`,
            scale: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ order: `${imageRight ? 2 : 1}` }}
          alt={feature.title}
          src={feature.image}
        />
        <CarDetailHighlightsCardTextContainer
          key={`text-${feature.title}`}
          initial={{ opacity: 0, y: `${imageRight ? -100 : 100}%`, scale: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : `${imageRight ? -100 : 100}%`,
            scale: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ order: `${imageRight ? 2 : 1}` }}
        >
          <TitleQuaternary>{feature.title}</TitleQuaternary>
          <Body>{bodyTextWithoutTags}</Body>
        </CarDetailHighlightsCardTextContainer>
      </AnimatePresence>
    </CarDetailHighlightsCardRoot>
  );
}
