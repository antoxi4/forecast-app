export interface StoredCity {
  id: string;
  name: string;
  country: string;
}

export interface StoredCityList {
  [key: string]: StoredCity[];
}