import React from "react"
import { Api } from "../../../Api"

export interface BootstrapContext {
  api: Api
}

export const bootstrapContext = React.createContext<BootstrapContext>( {} as BootstrapContext )