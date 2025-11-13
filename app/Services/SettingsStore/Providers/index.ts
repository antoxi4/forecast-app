import { ActiveCityProvider } from "./ActiveCityProvider"

export type RegisteredProvidersKeys = keyof typeof registerSettingsProviders

export const registerSettingsProviders = {
  activeCity: ActiveCityProvider,
}
