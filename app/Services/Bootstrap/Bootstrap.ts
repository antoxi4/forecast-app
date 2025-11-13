import { Api } from "../../Api"
import { ApiConfig } from "../../Configurations"
import { getSettingsStore } from "../SettingsStore"
import { BootstrapContext } from "./context/BootstrapContext"

export class Bootstrap {
  init = async(): Promise<BootstrapContext> => {
    const api = new Api({
      apiURL: ApiConfig.apiURL,
      apiKey: ApiConfig.apiKey,
    })
    const store = getSettingsStore()
    
    return {
      api,
      store,
    }
  }
}