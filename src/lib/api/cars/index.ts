import { fetcher } from "..";
export interface CarModelData {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

export interface CarFeatures {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
  title: string;
  description: string;
  model_features: ModelFeature[];
  model_highlights: ModelHighlight[];
}

export interface ModelFeature {
  name: string;
  description: string;
  image: string;
}

export interface ModelHighlight {
  title: string;
  content: string;
  image: string;
}

export function fetchCarModels() {
  return fetcher<CarModelData[]>("/models");
}

export function fetchCarFeatures(modelId: string) {
  return fetcher<CarFeatures>(`/models/${modelId}`);
}
