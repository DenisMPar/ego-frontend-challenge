import { CarModelData } from "../../../lib/api/cars";
import { ModelCardComponent } from "../../model-card";
import { CarListFilter } from "../filter";
import { CarListContainer, CarListRoot } from "./styled";

interface CarListProps {
  carList: CarModelData[];
}

export function CarList({ carList }: CarListProps) {
  return (
    <CarListRoot role="list">
      <CarListFilter />
      <CarListContainer>
        {carList.map((car) => (
          <ModelCardComponent key={car.id} carData={car} />
        ))}
      </CarListContainer>
    </CarListRoot>
  );
}
