import { useParams } from "react-router";
import { useGetCarDetails } from "../../hooks/cars";
import { TitleSecondary } from "../../ui/tipography";
import { CarouselComponent } from "../carousel";
import { CarDetailHighlights } from "./highlights";
import { CarDetailHero } from "./hero";
import { CarDetailSkeletons } from "./skeletons";
import { CarDetailError, CarDetailRoot } from "./styled";

export function CarDetailComponent() {
  const params = useParams();
  const { carDetails, isLoading, isError, isFetching } = useGetCarDetails(
    params.id as string
  );

  return (
    <CarDetailRoot>
      {isError && (
        <CarDetailError>
          <TitleSecondary>Error al cargar los detalles del auto</TitleSecondary>
        </CarDetailError>
      )}

      {(isLoading || isFetching) && <CarDetailSkeletons />}

      {!isLoading && !isFetching && carDetails && (
        <>
          <CarDetailHero carFeatures={carDetails} />
          <CarouselComponent
            carFeatures={[
              ...carDetails.model_features,
              ...carDetails.model_features,
              ...carDetails.model_features,
            ]}
          />
          <CarDetailHighlights highLights={carDetails.model_highlights} />
        </>
      )}
    </CarDetailRoot>
  );
}
