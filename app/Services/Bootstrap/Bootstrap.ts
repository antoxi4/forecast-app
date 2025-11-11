import { Api } from "../../Api"
import { ApiConfig } from "../../Configurations"
import { BootstrapContext } from "./context/BootstrapContext"

export class Bootstrap {
  init = async(): Promise<BootstrapContext> => {
    const api = new Api( {
      apiURL: ApiConfig.apiURL,
      apiKey: ApiConfig.apiKey,
    } )
    
    return {
      api,
    }
  }
}