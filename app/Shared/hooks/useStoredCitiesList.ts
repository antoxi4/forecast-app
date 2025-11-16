import { useCallback, useMemo } from "react"

import { LookupCity } from "../../Api"
import { useBootstrap } from "../../Services/Bootstrap"

interface UseStoreCityResult {
  activeCity: LookupCity | undefined
  cities: Array<LookupCity>
  setActiveCity?: (cityId: number) => void
  deleteCity?: (cityId: number) => void
}

export const useStoredCitiesList = (): UseStoreCityResult => {
  const { store } = useBootstrap()

  const [ rawStoredCities ] = store.storedCities.useValue()
  const [ activeCity ] = store.activeCity.useValue()

  
  const storedCities = useMemo(() => {
    return rawStoredCities ? Object.values(rawStoredCities) : []
  }, [ rawStoredCities ])


  const setActiveCity = useCallback((cityId: number) => {
    const city = storedCities.find(c => c.id === cityId)

    if (city) {
      store.activeCity.setValue(city)
    }
  }, [])

  const deleteCity = useCallback((cityId: number) => {
    const filteredCities = storedCities.filter(c => c.id !== cityId)

    if (filteredCities.length === 0) {
      store.activeCity.removeValue()
      store.storedCities.removeValue()
      return
    }
    const rawCitiesDuplicate = { ...rawStoredCities }
    delete rawCitiesDuplicate[ cityId ]

    if (cityId === activeCity?.id) {
      const [ firstStored ] = filteredCities
      
      store.activeCity.setValue(firstStored)
    }

    store.storedCities.setValue(rawCitiesDuplicate)
  }, [ storedCities, activeCity ])

  return { activeCity, cities: storedCities, setActiveCity, deleteCity }
}