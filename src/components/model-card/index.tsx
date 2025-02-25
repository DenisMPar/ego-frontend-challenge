import { Caption2, TitleTertiary } from "../../ui/tipography";
import {
  ModelCardImage,
  ModelCardImageContainer,
  ModelCardRoot,
} from "./styled";

export function ModelCardComponent() {
  return (
    <ModelCardRoot>
      <TitleTertiary>Etios</TitleTertiary>
      <ModelCardImageContainer>
        <Caption2>2019 | $ 815.900</Caption2>
        <ModelCardImage src="https://challenge.egodesign.dev/media/images/CAMRY-V6_LAT-Negro.width-300.png" />
      </ModelCardImageContainer>
    </ModelCardRoot>
  );
}
