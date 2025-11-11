import React from "react"

import { useBootstrap } from "../../Services/Bootstrap"

export const HomeScreen: React.FunctionComponent = () => {
  const { api } = useBootstrap()

  const getWeatherData = async () => {
    try {
      const response = await api.source.currentWeather.getByCity( 'London' )

      console.log( 'Weather data for London:', response.data )
    } catch ( error ) {
      console.error( 'Error fetching weather data:', error )
    }
  }
  
  React.useEffect( () => {
    getWeatherData()
  }, [] )
  return null
}