import { Image, Text } from "react-native"
import React, { useCallback } from "react"

import { styles } from "./HomeScreen.styles"
import { Header } from "./components/Header"
import { useBootstrap } from "../../Services/Bootstrap"
import { Routes, useNavigation } from "../../Navigation"
import { useActiveCityWeather } from "./hooks/useActiveCityWeather"

export const HomeScreen: React.FunctionComponent = () => {
  const { store } = useBootstrap()
  const navigation = useNavigation()
  
  const [ activeCity ] = store.activeCity.useValue()
  const cityWeather = useActiveCityWeather(activeCity?.name)

  const navigateToCityList = useCallback(() => {
    navigation.navigate(Routes.cityList)
  }, [ navigation ])

  return (
    <>
      <Header 
        cityName={activeCity?.name} 
        country={activeCity?.country} 
        date={cityWeather.locationDate}
        onCityListPress={navigateToCityList}
      />
      <Image 
        source={require('../../Assets/images/weatherState/sun_cloudy_color.png')} 
        style={styles.weatherStateImage} 
      />
      <Text style={styles.condition}>{cityWeather?.conditionText}</Text> 
      <Text style={styles.temperature}>{cityWeather?.currentTemperatureC?.toFixed(0) ?? '0'}°</Text>
      <Text style={styles.condition}>H:{cityWeather?.maxTemperatureC?.toFixed(0) ?? '0'}° L: {cityWeather?.minTemperatureC?.toFixed(0) ?? '0'}°</Text>
    </>
  )
}