import { Chip } from "../../../ui/chips";
import { DropDownComponent } from "../../drop-down";
import { useFilterContext } from "../context";
import { FilterRoot, NavFilter, TypeFilterMobile } from "./styled";

const filterOptions = [
  { text: "Todos", value: "all" },
  { text: "Autos", value: "cars" },
  { text: "Pickups y Comerciales", value: "pickups" },
  { text: "SUVs y Crossovers", value: "suv" },
];
const orderOptions = [
  {
    text: (
      <span>
        De <b>menor</b> a <b>mayor</b> precio
      </span>
    ),
    value: "asc",
  },
  {
    text: (
      <span>
        De <b>mayor</b> a <b>menor</b> precio
      </span>
    ),
    value: "des",
  },
  {
    text: (
      <span>
        Mas <b>nuevos</b> primero
      </span>
    ),
    value: "new",
  },
  {
    text: (
      <span>
        Mas <b>viejos</b> primero
      </span>
    ),
    value: "old",
  },
];
export function CarListFilter() {
  const { filters, setFilters } = useFilterContext();

  function handleFilterChange(value: string) {
    setFilters({ ...filters, type: value });
  }
  function handleOrderChange(value: string) {
    setFilters({ ...filters, sort: value });
  }
  return (
    <FilterRoot>
      <NavFilter>
        {filterOptions.map((item) => (
          <Chip
            key={item.value}
            $active={filters.type === item.value ? "true" : undefined}
            onClick={() => handleFilterChange(item.value)}
          >
            {item.text}
          </Chip>
        ))}
      </NavFilter>
      <TypeFilterMobile
        justify="left"
        title="Filtrar por"
        items={filterOptions}
        onChange={handleFilterChange}
        defaultValue="all"
      />
      <DropDownComponent
        justify="right"
        title="Ordenar por"
        items={orderOptions}
        onChange={handleOrderChange}
        defaultValue="asc"
      />
    </FilterRoot>
  );
}
