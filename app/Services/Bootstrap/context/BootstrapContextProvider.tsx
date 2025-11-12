import React from "react"
import { Alert } from "react-native"

import { Bootstrap } from "../Bootstrap"
import { BootstrapContext, bootstrapContext } from "./BootstrapContext"

interface BootstrapContextProviderProps {
  children?: React.ReactNode
}

export const BootstrapContextProvider: React.FunctionComponent<BootstrapContextProviderProps> = ( 
  props: BootstrapContextProviderProps 
) => {
  const [ bootstrapContextState, setBootstrapContextState ] = React.useState<BootstrapContext | null>(null)

  const initBootstrapContext = async(): Promise<void> => {
    try {
      const bootstrap = new Bootstrap()
      const context = await bootstrap.init()

      setBootstrapContextState(context)
    } catch {
      Alert.alert("Error", "Failed to initialize app.")
    }
  }

  React.useEffect(() => {
    initBootstrapContext()
  }, [])

  if (bootstrapContextState === null) {
    return null
  }

  return (
    <bootstrapContext.Provider value={bootstrapContextState}>
      {props.children}
    </bootstrapContext.Provider>
  )
}