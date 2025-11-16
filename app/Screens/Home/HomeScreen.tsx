import { Image, Text } from "react-native"
import React, { useCallback } from "react"

import { styles } from "./HomeScreen.styles"
import { Header } from "./components/Header"
import { useBootstrap } from "../../Services/Bootstrap"
import { FeelsLikeWidget } from "./components/Widgets/FeelsLike"
import { useActiveCityWeather } from "./hooks/useActiveCityWeather"
import { Routes, useNavigation } from "../../Navigation"
import { UVIndexWidget, WindWidget } from "./components/Widgets"
import { WidgetsConfiguration, WidgetsRenderer } from "./components/WidgetsRenderer"
import { SafeAreaScrollView, SafeAreaScrollViewEdgeMerge, SafeAreaScrollViewEdges } from "../../Shared/components/SafeAreaScrollView"

const widgetsConfiguration: WidgetsConfiguration = [
  [ FeelsLikeWidget, UVIndexWidget ],
  WindWidget,
]

const scrollViewEdges: SafeAreaScrollViewEdges = [ 'bottom' ]
const scrollViewEdgeMerge: SafeAreaScrollViewEdgeMerge = {
  bottom: 16,
}

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
      <SafeAreaScrollView 
        safeAreaEdges={scrollViewEdges} 
        safeAreaEdgeMerge={scrollViewEdgeMerge}
      >
        <Image 
          source={require('../../Assets/images/weatherState/sun_cloudy_color.png')} 
          style={styles.weatherStateImage} 
        />

        <Text style={styles.condition}>
          {cityWeather?.conditionText}
        </Text> 
        <Text style={styles.temperature}>
          {cityWeather?.currentTemperatureC?.toFixed(0) ?? '0'}°
        </Text>
        <Text style={styles.condition}>
          H:{cityWeather?.maxTemperatureC?.toFixed(0) ?? '0'}° L: {cityWeather?.minTemperatureC?.toFixed(0) ?? '0'}°
        </Text>

        <WidgetsRenderer 
          configuration={widgetsConfiguration}
          data={cityWeather}
        />

      </SafeAreaScrollView>
    </>
  )
}