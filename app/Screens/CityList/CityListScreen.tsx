import React from "react"
import { useNavigation } from "../../Navigation"
import { Header } from "./components/Header"

export const CityListScreen: React.FunctionComponent = () => {
  const { goBack } = useNavigation()

  return (
    <>
      <Header onPressBack={goBack}/>
    </>
  )
}