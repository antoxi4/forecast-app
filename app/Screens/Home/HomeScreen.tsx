import React from "react"
import { useBootstrap } from "../../Services/Bootstrap"

export const HomeScreen: React.FunctionComponent = () => {
  const { api } = useBootstrap()

  console.log( 'API instance in HomeScreen:', api )
  return null
}