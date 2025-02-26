import { useParams } from "react-router";
import { useGetCarDetails } from "../../hooks/cars";
import { TitleSecondary } from "../../ui/tipography";
import { CarouselComponent } from "../carousel";
import { CarDetailFeatures } from "./features";
import { CarDetailHero } from "./hero";
import { CarDetailSkeletons } from "./skeletons";
import { CarDetailError, CarDetailRoot } from "./styled";

export function CarDetailComponent() {
  const params = useParams();
  const { carDetails, isLoading, isError } = useGetCarDetails(
    params.id as string
  );

  return (
    <CarDetailRoot>
      {isError && (
        <CarDetailError>
          <TitleSecondary>Error al cargar los detalles del auto</TitleSecondary>
        </CarDetailError>
      )}
      {isLoading && <CarDetailSkeletons />}
      {carDetails && (
        <>
          <CarDetailHero carFeatures={carDetails} />
          <CarouselComponent
            carHiglights={[
              ...carDetails.model_highlights,
              ...carDetails.model_highlights,
              ...carDetails.model_highlights,
            ]}
          />
          <CarDetailFeatures features={carDetails.model_features} />
        </>
      )}
    </CarDetailRoot>
  );
}
