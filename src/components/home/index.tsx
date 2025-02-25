import { TitlePrimary } from "../../ui/tipography";
import { CarList } from "./car-list";
import { HomeRoot } from "./styled";

export function HomeComponent() {
  return (
    <HomeRoot>
      <TitlePrimary>Descubrí todos los modelos </TitlePrimary>

      <CarList />
    </HomeRoot>
  );
}
