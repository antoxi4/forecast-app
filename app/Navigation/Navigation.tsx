import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Routes } from "./Routes"
import { HomeScreen } from "../Screens/Home"
import { Colors } from "../Styling"
import { NavigationParameters } from "./NavigationParameters"

const RootNavigationStack = createNativeStackNavigator<NavigationParameters>()

export const Navigation: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
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
      </RootNavigationStack.Navigator>
    </NavigationContainer>
  )
}