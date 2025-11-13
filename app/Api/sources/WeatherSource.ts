import { AxiosResponse } from 'axios'

import { BaseApiSource } from "./BaseApiSource"
import { CurrentWeatherResponse, LookupCityResponse, WeatherForecastResponse } from '../models'

export class WeatherSource extends BaseApiSource {
  getCurrentByCity = async(city: string): Promise<AxiosResponse<CurrentWeatherResponse>> => {
    const response = await this.adapter.get<CurrentWeatherResponse>('/current.json', {
      params: {
        q: city,
      },
    })

    return response
  }

  getForecastByCity = async(city: string): Promise<AxiosResponse<WeatherForecastResponse>> => {
    const response = await this.adapter.get<WeatherForecastResponse>('/forecast.json', {
      params: {
        q: city,
      },
    })

    return response
  }

  lookupCity = async(city: string): Promise<AxiosResponse<LookupCityResponse>> => {
    const response = await this.adapter.get<LookupCityResponse>('/search.json', {
      params: {
        q: city,
      },
    })

    return response
  }
}