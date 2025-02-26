import { useRef } from "react";
import { ModelFeature } from "../../../../lib/api/cars";
import { Body, TitleQuaternary } from "../../../../ui/tipography";
import {
  CarDetailFeaturesCardImage,
  CarDetailFeaturesCardRoot,
  CarDetailFeaturesCardTextContainer,
} from "./styled";
import { AnimatePresence, useInView } from "framer-motion";

export function CardDetailFeatureCard({
  feature,
  imageRight,
}: {
  feature: ModelFeature;
  imageRight: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <CarDetailFeaturesCardRoot $imageRight={imageRight} ref={ref}>
      <AnimatePresence>
        <CarDetailFeaturesCardImage
          key={`image-${feature.name}`}
          initial={{ opacity: 0, x: `${imageRight ? -100 : 100}%`, scale: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : `${imageRight ? 100 : -100}%`,
            scale: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ order: `${imageRight ? 2 : 1}` }}
          alt={feature.name}
          src={feature.image}
        />
        <CarDetailFeaturesCardTextContainer
          key={`text-${feature.name}`}
          initial={{ opacity: 0, y: `${imageRight ? -100 : 100}%`, scale: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : `${imageRight ? -100 : 100}%`,
            scale: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ order: `${imageRight ? 2 : 1}` }}
        >
          <TitleQuaternary>{feature.name}</TitleQuaternary>
          <Body>{feature.description}</Body>
        </CarDetailFeaturesCardTextContainer>
      </AnimatePresence>
    </CarDetailFeaturesCardRoot>
  );
}
