import React from "react"

import { NavigationHeader } from "../../SharedComponents/NavigationHeader/NavigationHeader"
import { useNavigation } from "../../Navigation"

export const CityListScreen: React.FunctionComponent = () => {
  const { goBack } = useNavigation()
  
  return (
    <>
      <NavigationHeader onPressBack={goBack}/>
    </>
  )
}