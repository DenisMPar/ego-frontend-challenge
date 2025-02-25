import styled from "styled-components";
import { Caption } from "../../../ui/tipography";

export const CarDetailHeroRoot = styled.div`
  height: 494px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 15px;
`;
export const CarDetailHeroImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const CarDetailHeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
