import { createContext, useContext } from "react";
import { FiltersType } from ".";

interface FilterContextType {
  filters: FiltersType;
  setFilters: React.Dispatch<
    React.SetStateAction<{ type: string; sort: string }>
  >;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext debe usarse dentro de un FilterProvider");
  }
  return context;
};
