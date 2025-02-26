import { CarFeatures, CarModelData } from "../api/cars";

export const mockModelsData: CarModelData[] = [
  {
    id: 1,
    name: "Corolla",
    segment: "Sedan",
    year: 2021,
    price: 3817000.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/corolla_plata_metalico.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/corolla_plata_metalico.width-600.png",
  },
  {
    id: 2,
    name: "Camry",
    segment: "Sedan",
    year: 2020,
    price: 4250400.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/CAMRY-V6_LAT-Negro.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/CAMRY-V6_LAT-Negro.width-600.png",
  },
  {
    id: 3,
    name: "Yaris Hatchback",
    segment: "Hatchback",
    year: 2021,
    price: 2585000.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/YarisHB_Rojo_res.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/YarisHB_Rojo_res.width-600.png",
  },
  {
    id: 4,
    name: "Etios",
    segment: "Hatchback",
    year: 2021,
    price: 1731000.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/709000-1619455628_320.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/709000-1619455628_320.width-600.png",
  },
  {
    id: 5,
    name: "Hilux",
    segment: "Pickups y Comerciales",
    year: 2021,
    price: 3410000.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png",
  },
  {
    id: 6,
    name: "Hiace Furgón",
    segment: "Pickups y Comerciales",
    year: 2021,
    price: 3645200.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png",
  },
  {
    id: 7,
    name: "Rav4",
    segment: "SUVs",
    year: 2021,
    price: 2960500.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png",
  },
  {
    id: 8,
    name: "SW4",
    segment: "SUVs",
    year: 2022,
    price: 6892000.0,
    thumbnail:
      "https://challenge.egodesign.dev/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",
    photo:
      "https://challenge.egodesign.dev/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png",
  },
];
export const mockCarFeatures: CarFeatures = {
  id: 3,
  name: "Corolla",
  segment: "Sedan",
  year: 2021,
  price: 3817000.0,
  thumbnail:
    "https://challenge.egodesign.dev/media/images/corolla_plata_metalico.width-300.png",
  photo:
    "https://challenge.egodesign.dev/media/images/corolla_plata_metalico.width-600.png",
  title: "Nuevo Corolla, siempre adelante.",
  description:
    '<p data-block-key="hnweq"> La nueva generación del sedán más vendido estrena diseño, plataforma y mecánica. </p>',
  model_features: [
    {
      name: 'Llantas de aleación de 17"',
      description: "Disponible en versión SEG 2.0 CVT",
      image:
        "https://challenge.egodesign.dev/media/images/cdCq1UKdgX.width-270.jpg",
    },
    {
      name: "Faros traseros full LED",
      description: "Mayor claridad y seguridad que con faros tradicionales",
      image:
        "https://challenge.egodesign.dev/media/images/0vH4SPiM7n.width-270.jpg",
    },
  ],
  model_highlights: [
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
  ],
};
