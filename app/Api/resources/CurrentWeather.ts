import { AxiosResponse } from 'axios'

import { BaseApiSource } from "./BaseApiSource"
import { CurrentWeatherData, WeatherLocation } from '../models'

export interface CurrentWeatherResponse {
  location: WeatherLocation
  current: CurrentWeatherData
}

export class CurrentWeather extends BaseApiSource {
  getByCity = async( city: string ): Promise<AxiosResponse<CurrentWeatherResponse>> => {
    const response = await this.adapter.get<CurrentWeatherResponse>( '/current.json', {
      params: {
        q: city,
      }
    } )

    return response
  }
}