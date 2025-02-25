import { Body, TitleQuaternary } from "../../../../ui/tipography";
import {
  CarDetailFeaturesCardImage,
  CarDetailFeaturesCardRoot,
} from "./styled";

export function CardDetailFeatureCard() {
  return (
    <CarDetailFeaturesCardRoot>
      <CarDetailFeaturesCardImage src="https://challenge.egodesign.dev/media/images/cdCq1UKdgX.width-270.jpg" />
      <TitleQuaternary>Título de 20 px</TitleQuaternary>
      <Body>
        Mayor durabilidad, estabilidad, confort de marcha y mucha seguridad.
        Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor.
      </Body>
    </CarDetailFeaturesCardRoot>
  );
}
