import { useMemo } from "react";
import {
  CarModelData,
  fetchCarFeatures,
  fetchCarModels,
} from "../lib/api/cars";
import { useQuery } from "@tanstack/react-query";

export function useGetFileteredCars({
  cars,
  typeFilter,
  sortOption,
}: {
  cars: CarModelData[] | undefined;
  typeFilter: string | undefined;
  sortOption: string | undefined;
}) {
  const filteredCars = useMemo(() => {
    const filterActions: {
      [key: string]: (cars: CarModelData[]) => CarModelData[];
    } = {
      all: (cars: CarModelData[]) => cars,
      cars: (cars: CarModelData[]) =>
        cars.filter(
          (car) => car.segment === "Sedan" || car.segment === "Hatchback"
        ),
      pickups: (cars: CarModelData[]) =>
        cars.filter((car) => car.segment === "Pickups y Comerciales"),
      suv: (cars: CarModelData[]) =>
        cars.filter((car) => car.segment === "SUVs"),
    };

    const sortActions: {
      [key: string]: (cars: CarModelData[]) => CarModelData[];
    } = {
      asc: (cars: CarModelData[]) => cars.sort((a, b) => a.price - b.price),
      des: (cars: CarModelData[]) => cars.sort((a, b) => b.price - a.price),
      new: (cars: CarModelData[]) => cars.sort((a, b) => b.year - a.year),
      old: (cars: CarModelData[]) => cars.sort((a, b) => a.year - b.year),
    };
    if (!cars) return [];

    let result = cars;

    if (typeFilter) {
      result = filterActions[typeFilter](result);
    }

    if (sortOption) {
      result = sortActions[sortOption](result);
    }

    return result;
  }, [cars, typeFilter, sortOption]);
  return filteredCars;
}

export function useGetCars() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCarModels,
    staleTime: 1000 * 60 * 5,
  });

  return { cars: data, isLoading, isError, isSuccess };
}

export function useGetCarDetails(modelId: string) {
  const {
    data: carDetails,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["car-features"],
    queryFn: () => fetchCarFeatures(modelId),
    staleTime: 1000 * 60 * 5,
  });

  return { carDetails, isLoading, isError, isSuccess };
}
