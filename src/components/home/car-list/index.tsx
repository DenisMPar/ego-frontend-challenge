import { ModelCardComponent } from "../../model-card";
import { CarListFilter } from "../filter";
import { CarListContainer, CarListRoot } from "./styled";

export function CarList() {
  return (
    <CarListRoot>
      <CarListFilter />
      <CarListContainer>
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
        <ModelCardComponent />
      </CarListContainer>
    </CarListRoot>
  );
}
