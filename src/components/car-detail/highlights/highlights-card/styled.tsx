import { motion } from "framer-motion";
import styled from "styled-components";

export const CarDetailHighlightsCardRoot = styled.div<{
  $imageRight?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1139px;
    margin: 0 auto;
    align-items: center;
    justify-items: center;
    grid-template-areas: ${({ $imageRight }) =>
      $imageRight ? "'text image'" : "'image text'"};
  }
`;

export const CarDetailHighlightsCardTextContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 385px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    gap: 14px;
    flex-grow: 1;
    grid-area: text;
  }
`;

export const CarDetailHighlightsCardImage = styled(motion.img)`
  position: relative;
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;

  @media screen and (min-width: 1024px) {
    height: 100%;
    max-height: 294px;
    grid-area: image;
    object-fit: cover;
  }
`;
