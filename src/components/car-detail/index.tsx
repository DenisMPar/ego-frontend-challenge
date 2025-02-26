import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchCarFeatures } from "../../lib/api/cars";
import { CarouselComponent } from "../carousel";
import { CarDetailFeatures } from "./features";
import { CarDetailHero } from "./hero";
import { CarDetailSkeletons } from "./skeletons";
import { CarDetailError, CarDetailRoot } from "./styled";
import { TitleSecondary } from "../../ui/tipography";

export function CarDetailComponent() {
  const params = useParams();
  const {
    data: carDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["car-features"],
    queryFn: () => fetchCarFeatures(params.id!),
    staleTime: 1000 * 60 * 5,
  });

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
