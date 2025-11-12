import { AxiosInstance } from 'axios'

import { CurrentWeather } from "./CurrentWeather"

export interface ApiSources {
  currentWeather: CurrentWeather
}

export const getApiResources = (adapter: AxiosInstance) => ({
  currentWeather: new CurrentWeather (adapter),
})