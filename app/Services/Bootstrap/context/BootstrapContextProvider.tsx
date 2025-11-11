import React from "react"
import { bootstrapContext } from "./BootstrapContext"

interface BootstrapContextProviderProps {
  children?: React.ReactNode
}

export const BootstrapContextProvider: React.FunctionComponent<BootstrapContextProviderProps> = ( 
  props: BootstrapContextProviderProps 
) => (
  <bootstrapContext.Provider value={{} as any}>
    {props.children}
  </bootstrapContext.Provider>
)