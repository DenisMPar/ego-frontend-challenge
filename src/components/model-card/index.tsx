import { CarModelData } from "../../lib/api/cars";
import { ButtonRounded } from "../../ui/buttons";
import { Caption2, TitleTertiary } from "../../ui/tipography";
import {
  ModelCardImage,
  ModelCardImageContainer,
  ModelCardRoot,
  ViewModelButtonContainer,
} from "./styled";

interface ModelCardProps {
  carData: CarModelData;
}

export function ModelCardComponent({ carData }: ModelCardProps) {
  return (
    <ModelCardRoot to={`/model/${carData.id}`}>
      <TitleTertiary>{carData.name}</TitleTertiary>
      <ModelCardImageContainer>
        <Caption2>
          {carData.year} | ${carData.price.toLocaleString("es-AR")}
        </Caption2>
        <ModelCardImage src={carData.thumbnail} />
      </ModelCardImageContainer>
      <ViewModelButtonContainer>
        <ButtonRounded>Ver modelo</ButtonRounded>
      </ViewModelButtonContainer>
    </ModelCardRoot>
  );
}
