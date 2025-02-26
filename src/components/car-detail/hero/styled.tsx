import styled from "styled-components";
import { Caption, TitleSecondary } from "../../../ui/tipography";

export const CarDetailHeroRoot = styled.div`
  height: 494px;
  max-width: 747px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 15px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    max-width: 1152px;
    gap: 118px;
    padding: 0px;
  }
`;
export const CarDetailHeroImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
  @media screen and (min-width: 1024px) {
    height: auto;
  }
`;
export const CarDetailHeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 37px;
`;
export const CarDetailHeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
export const CarDetailHeroCaption = styled(Caption)`
  color: var(--black-2);
`;
export const CarDetailHeroTitle = styled(TitleSecondary)`
  @media screen and (min-width: 1024px) {
    color: var(--black-2);
    font-family: Montserrat;
    font-weight: 600;
    font-size: 50px;
    line-height: 57px;
    letter-spacing: -1px;
  }
`;
