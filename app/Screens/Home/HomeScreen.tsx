import React from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { useBootstrap } from "../../Services/Bootstrap"
import { styles } from "./HomeScreen.styles"

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.cityTitle}>Kyiv</Text>
    </SafeAreaView>
  )
}