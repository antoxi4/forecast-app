import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Routes } from "./Routes"
import { Colors } from "../Styling"
import { NavigationState } from "./NavigationState"
import { NavigationParameters } from "./NavigationParameters"

import { HomeScreen } from "../Screens/Home"
import { CityListScreen } from "../Screens/CityList"

const RootNavigationStack = createNativeStackNavigator<NavigationParameters>()

export const Navigation: React.FunctionComponent = () => {
  return (
    <NavigationContainer ref={NavigationState.shared.navigationRef}>
      <RootNavigationStack.Navigator 
        initialRouteName={Routes.home} 
        screenOptions={{ 
          headerShown: false, 
          contentStyle: { backgroundColor: Colors.backgroundPrimary }, 
        }}
      >
        <RootNavigationStack.Screen 
          name={Routes.home} 
          component={HomeScreen} 
        />
        <RootNavigationStack.Screen 
          name={Routes.cityList} 
          component={CityListScreen} 
        />
      </RootNavigationStack.Navigator>
    </NavigationContainer>
  )
}