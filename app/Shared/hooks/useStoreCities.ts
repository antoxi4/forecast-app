import { useCallback } from "react"
import { LookupCity } from "../../Api"
import { useBootstrap } from "../../Services/Bootstrap"

interface UseStoreCityResult {
  storeCity: (city: LookupCity) => void
}

export const useStoreCity = (): UseStoreCityResult => {
  const { store } = useBootstrap()

  const storeCity = useCallback((city: LookupCity) => {
    const storedCities = store.storedCities.getValue() ?? {}
    const cityId = `${ city.id }`

    if (cityId in storedCities) {
      return
    }

    storedCities[ cityId ] = city
    
    store.storedCities.setValue(storedCities)
    store.activeCity.setValue(city)
  }, [])

  return { storeCity }
}