import { AxiosInstance } from 'axios'

import { WeatherSource } from "./WeatherSource"

export interface ApiSources {
  weather: WeatherSource
}

export const getApiResources = (adapter: AxiosInstance): ApiSources => ({
  weather: new WeatherSource(adapter),
})