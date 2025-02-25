import { CarouselComponent } from "../carousel";
import { CarDetailFeatures } from "./features";
import { CarDetailHero } from "./hero";
import { CarDetailRoot } from "./styled";

export function CarDetailComponent() {
  return (
    <CarDetailRoot>
      <CarDetailHero />
      <CarouselComponent
        carFeatures={[
          {
            title: "Nuevo Motor 2.0L Dynamic Force",
            content:
              '<p data-block-key="3gmwv">El nuevo motor 2.0 L brinda un excelente equilibrio entre bajo consumo y performance con una potencia de 170 CV y 200 NM.</p>',
            image:
              "https://challenge.egodesign.dev/media/images/F7Li21RQPK.width-560.jpg",
          },
          {
            title: "Nueva Transmisión",
            content:
              '<p data-block-key="3gmwv">Direct shift CVT (2.0 L): de 10 velocidades, que otorgan una aceleración directa por medio de un engranaje mecánico adicional para bajas velocidades. Incorpora modo secuencial, levas al volante y modo de conducción SPORT.</p>',
            image:
              "https://challenge.egodesign.dev/media/images/Suyrw07kW7.width-560.jpg",
          },
        ]}
      />
      <CarDetailFeatures />
    </CarDetailRoot>
  );
}
