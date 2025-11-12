import React from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { styles } from "./HomeScreen.styles"
import { useBootstrap } from "../../Services/Bootstrap"
import { Icon, IconName } from "../../SharedComponents/Icon"

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
      <Icon name={IconName.cloud} style={styles.icon} />
    </SafeAreaView>
  )
}