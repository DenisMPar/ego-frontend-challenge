import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CarFeatures, fetchCarFeatures } from "../../lib/api/cars";
import { CarouselComponent } from "../carousel";
import { CarDetailFeatures } from "./features";
import { CarDetailHero } from "./hero";
import { CarDetailRoot } from "./styled";

export function CarDetailComponent() {
  const [carDetails, setCarDetails] = useState<CarFeatures | null>(null);
  const params = useParams();

  useEffect(() => {
    const getCarFeatures = async () => {
      if (params.id) {
        const carFeatures = await fetchCarFeatures(params.id);
        setCarDetails(carFeatures);
      }
    };
    getCarFeatures();
  }, [params.id]);
  return (
    <CarDetailRoot>
      {carDetails && (
        <>
          <CarDetailHero carFeatures={carDetails} />
          <CarouselComponent carHiglights={carDetails.model_highlights} />
          <CarDetailFeatures features={carDetails.model_features} />
        </>
      )}
    </CarDetailRoot>
  );
}
