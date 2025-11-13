import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useMemo, useState } from "react"

import { useBootstrap } from "../../../Services/Bootstrap"
import { WeatherForecastResponse } from "../../../Api"

interface UseActiveCityWeather {
  locationDate?: Date;
  currentTemperatureC?: number;
  minTemperatureC?: number;
  maxTemperatureC?: number;
  conditionText?: string;
}

export const useActiveCityWeather = (cityName?: string): UseActiveCityWeather => {
  const { api } = useBootstrap()
  const [ currentForecast, setCurrentForecast ] = useState<WeatherForecastResponse | null>(null)

  const fetchCityForecast = useCallback(async () => {
    if (!cityName) {
      return
    }

    const response = await api.source.weather.getForecastByCity(cityName)
    
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
    }
  }, [ currentForecast ])
}