import React from "react"
import { Button, Image, Text } from "react-native"

import { styles } from "./CityListScreen.styles"
import { Header } from "./components/Header"
import { useBootstrap } from "../../Services/Bootstrap"
import { WeatherForecastResponse } from "../../Api"

export const CityListScreen: React.FunctionComponent = () => {
  return (
    <>
      <Header 
        cityName={''} 
        country={''} 
        dateString={''} 
      />
    </>
  )
}