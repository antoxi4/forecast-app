import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useMemo, useState } from "react"

import { useBootstrap } from "../../../Services/Bootstrap"
import { WeatherConditionCode, WeatherForecastResponse } from "../../../Api"

export interface UseActiveCityWeather {
  locationDate?: Date;
  currentTemperatureC?: number;
  minTemperatureC?: number;
  maxTemperatureC?: number;
  conditionText?: string;
  windSpeedKph?: number;
  windGustKph?: number;
  windDirection?: string;
  windDegree?: number;
  feelLikeC?: number;
  uvIndex?: number;
  conditionCode?: WeatherConditionCode;
  isDay?: boolean;
}

export const useActiveCityWeather = (cityName?: string): UseActiveCityWeather => {
  const { api } = useBootstrap()
  const [ currentForecast, setCurrentForecast ] = useState<WeatherForecastResponse | null>(null)

  const fetchCityForecast = useCallback(async () => {
    if (!cityName) {
      return
    }

    const response = await api.source.weather.getForecastByCity(cityName)
    
    console.log(response.data)
    setCurrentForecast(response.data)
  }, [ api, cityName ])

  useFocusEffect(
    useCallback(() => {
      requestAnimationFrame(() => {
        fetchCityForecast()
      })
    }, [ fetchCityForecast ])
  )

  return useMemo((): UseActiveCityWeather => {
    const [ nearestForecast ] = currentForecast?.forecast?.forecastday || []

    return {
      locationDate: currentForecast ? new Date(currentForecast.location.localtime) : undefined,
      currentTemperatureC: currentForecast?.current.temp_c,
      minTemperatureC: nearestForecast?.day.mintemp_c,
      maxTemperatureC: nearestForecast?.day.maxtemp_c,
      conditionText: currentForecast?.current.condition.text,
      windSpeedKph: currentForecast?.current.wind_kph,
      windGustKph: currentForecast?.current.gust_kph,
      windDirection: currentForecast?.current.wind_dir,
      windDegree: currentForecast?.current.wind_degree,
      feelLikeC: currentForecast?.current.feelslike_c,
      uvIndex: currentForecast?.current.uv,
      conditionCode: currentForecast?.current.condition.code,
      isDay: currentForecast ? Boolean(currentForecast.current.is_day) : undefined,
    }
  }, [ currentForecast ])
}