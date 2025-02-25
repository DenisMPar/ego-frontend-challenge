import { useEffect, useState } from "react";
import { TitlePrimary } from "../../ui/tipography";
import { CarList } from "./car-list";
import { HomeRoot } from "./styled";
import { CarModelData, fetchCarModels } from "../../lib/api/cars";

export function HomeComponent() {
  const [cars, setCars] = useState<CarModelData[] | null>(null);

  useEffect(() => {
    const getCars = async () => {
      const cars = await fetchCarModels();
      setCars(cars);
    };
    getCars();
  }, []);
  return (
    <HomeRoot>
      <TitlePrimary>Descubrí todos los modelos </TitlePrimary>
      {cars && <CarList carList={cars} />}
    </HomeRoot>
  );
}
