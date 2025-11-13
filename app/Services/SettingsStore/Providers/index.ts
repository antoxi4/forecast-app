import { ActiveCityProvider } from "./ActiveCityProvider"
import { StoredCitiesProvider } from "./StoredCitiesProvider"

export type RegisteredProvidersKeys = keyof typeof registerSettingsProviders

export const registerSettingsProviders = {
  activeCity: ActiveCityProvider,
  storedCities: StoredCitiesProvider,
}
