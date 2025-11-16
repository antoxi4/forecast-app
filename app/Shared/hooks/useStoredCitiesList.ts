import { useCallback, useMemo } from "react"

import { LookupCity } from "../../Api"
import { useBootstrap } from "../../Services/Bootstrap"

interface UseStoreCityResult {
  activeCity: LookupCity | undefined
  cities: Array<LookupCity>
  setActiveCity?: (city: LookupCity) => void
}

export const useStoredCitiesList = (): UseStoreCityResult => {
  const { store } = useBootstrap()

  const [ rawStoredCities ] = store.storedCities.useValue()
  const [ activeCity ] = store.activeCity.useValue()

  
  const storedCities = useMemo(() => {
    return rawStoredCities ? Object.values(rawStoredCities) : []
  }, [ rawStoredCities ])


  const setActiveCity = useCallback((city: LookupCity) => {
    store.activeCity.setValue(city)
  }, [])

  return { activeCity, cities: storedCities, setActiveCity }
}