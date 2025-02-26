import { useState } from "react";
import { useGetCars, useGetFileteredCars } from "../../hooks/cars";
import { TitlePrimary, TitleQuaternary } from "../../ui/tipography";
import { CarList } from "./car-list";
import { FilterContext } from "./context";
import { CarListSkeletons } from "./skeletons";
import { HomeRoot } from "./styled";

export interface FiltersType {
  type: string;
  sort: string;
}

export function HomeComponent() {
  const [filters, setFilters] = useState<FiltersType>({
    type: "all",
    sort: "asc",
  });

  const { cars, isLoading, isError } = useGetCars();

  const filteredCars = useGetFileteredCars({
    cars,
    typeFilter: filters.type,
    sortOption: filters.sort,
  });

  return (
    <HomeRoot>
      <TitlePrimary>Descubrí todos los modelos </TitlePrimary>
      <FilterContext.Provider value={{ filters, setFilters }}>
        {isLoading && <CarListSkeletons />}
        {cars && filteredCars && <CarList carList={filteredCars} />}
        {isError && (
          <TitleQuaternary>
            {"Hubo un error al cargar los modelos :("}
          </TitleQuaternary>
        )}
      </FilterContext.Provider>
    </HomeRoot>
  );
}
