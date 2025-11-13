import React from "react"

import { Api } from "../../../Api"
import { SettingsStore } from "../../SettingsStore"

export interface BootstrapContext {
  api: Api
  store: SettingsStore
}

export const bootstrapContext = React.createContext<BootstrapContext>({} as BootstrapContext)