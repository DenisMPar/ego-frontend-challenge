import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useGetFileteredCars } from "../../hooks/cars";
import { fetchCarModels } from "../../lib/api/cars";
import { TitlePrimary, TitleQuaternary } from "../../ui/tipography";
import { CarList } from "./car-list";
import { CarListSkeletons } from "./skeletons";
import { HomeRoot } from "./styled";
import { FilterContext } from "./context";

export interface FiltersType {
  type: string;
  sort: string;
}

export function HomeComponent() {
  const [filters, setFilters] = useState<FiltersType>({
    type: "all",
    sort: "asc",
  });

  const {
    data: cars,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCarModels,
    staleTime: 1000 * 60 * 5,
  });

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
