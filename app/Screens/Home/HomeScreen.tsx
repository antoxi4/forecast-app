import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { styles } from "./HomeScreen.styles"
import { useBootstrap } from "../../Services/Bootstrap"
import { Icon, IconName } from "../../SharedComponents/Icon"
import { defaultHitSlop } from "../../Styling"

export const HomeScreen: React.FunctionComponent = () => {
  const { api } = useBootstrap()

  const getWeatherData = async () => {
    try {
      const response = await api.source.currentWeather.getByCity('London')

      console.log('Weather data for London:', response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }
  
  React.useEffect(() => {
    getWeatherData()
  }, [])

  return (
    <SafeAreaView style={styles.header}>
      <Icon name={IconName.locationOn} style={styles.locationIcon} />
      <View style={styles.locationContainer}>
        <Text style={styles.city}>Kyiv, UA</Text>
        <Text style={styles.date}>Monday, 20 Jan</Text>
      </View>
      <TouchableOpacity hitSlop={defaultHitSlop}>
        <Icon name={IconName.search} style={styles.locationIcon} />
      </TouchableOpacity>
      {/* <Text style={styles.temperature}>-15°</Text> */}
    </SafeAreaView>
  )
}