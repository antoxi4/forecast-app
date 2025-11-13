import React from "react"
import { Image, Text } from "react-native"

import { styles } from "./CityListScreen.styles"
import { Header } from "./components/Header"
import { useBootstrap } from "../../Services/Bootstrap"
import { WeatherForecastResponse } from "../../Api"

export const CityListScreen: React.FunctionComponent = () => {
  const { api } = useBootstrap()
  const [ currentWeather, setCurrentWeather ] = React.useState<WeatherForecastResponse | null>(null)

  const getWeatherData = async () => {
    try {
      const response = await api.source.weather.getForecastByCity('Toronto')

      setCurrentWeather(response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  const nearestForecast = currentWeather?.forecast?.forecastday?.[ 0 ]
  
  React.useEffect(() => {
    getWeatherData()
  }, [])

  return (
    <>
      <Header 
        cityName={currentWeather?.location.name} 
        country={currentWeather?.location.country} 
        dateString={currentWeather?.location.localtime} 
      />
      <Image 
        source={require('../../Assets/images/weatherState/sun_cloudy_color.png')} 
        style={styles.weatherStateImage} 
      />
      <Text style={styles.condition}>{currentWeather?.current.condition.text}</Text> 
      <Text style={styles.temperature}>{currentWeather?.current.temp_c.toFixed(0) ?? '0'}°</Text>
      <Text style={styles.condition}>H:{nearestForecast?.day.maxtemp_c.toFixed(0) ?? '0'}° L: {nearestForecast?.day.mintemp_c.toFixed(0) ?? '0'}°</Text>
    </>
  )
}