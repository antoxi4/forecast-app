import { useCallback, useEffect, useState } from "react"

import { useBootstrap } from "../../../Services/Bootstrap"
import { LookupCity } from "../../../Api"
import { useThrottling } from "../../../Shared/hooks/useThrottling"

interface SearchState {
  isSearchLoading: boolean;
  isSearchActive: boolean;
  searchValue: string;
}

interface UseCitiesSearchResult {
  foundCities: Array<LookupCity>;
  isSearchLoading: boolean;
  searchValue: string;
  isSearchActive: boolean;
  toggleSearch: () => void;
  setSearchValue: (value: string) => void;
  turnOffSearch: () => void;
}

export const useCitiesSearch = (): UseCitiesSearchResult => {
  const { api } = useBootstrap()
  const searchThrottler = useThrottling(800)

  const [ foundCities, setFoundCities ] = useState<Array<LookupCity>>([])
  
  const [ 
    isSearchActive, 
    setIsSearchActive, 
  ] = useState<SearchState>({ isSearchActive: false, searchValue: '', isSearchLoading: false })

  const toggleSearch = useCallback(() => {
    setIsSearchActive((prevState) => ({ 
      isSearchActive: !prevState.isSearchActive, 
      searchValue: '', 
      isSearchLoading: false,
    }))
  }, [])

  const setSearchValue = useCallback((value: string) => {
    setIsSearchActive((prevState) => ({
      ...prevState,
      searchValue: value,
    }))
  }, [])

  const lookupCities = useCallback(async (query: string) => {
    setIsSearchActive((prevState) => ({
      ...prevState,
      isSearchLoading: true,
    }))

    try {
      const response = await api.source.weather.lookupCity(query)

      setFoundCities(response.data)
    } catch (error) {
      console.error('Error looking up cities:', error)
    } finally {
      setIsSearchActive((prevState) => ({
        ...prevState,
        isSearchLoading: false,
      }))
    }
  }, [ api ])

  useEffect(() => {
    if (isSearchActive.isSearchActive && isSearchActive.searchValue) {
      searchThrottler(() => lookupCities(isSearchActive.searchValue))
    } else {
      setFoundCities([])
    }
  }, [ isSearchActive.searchValue, isSearchActive.isSearchActive ])

  const turnOffSearch = useCallback(() => {
    setIsSearchActive({ isSearchActive: false, searchValue: '', isSearchLoading: false })
  }, [])

  return {
    foundCities,
    isSearchLoading: isSearchActive.isSearchLoading ?? false,
    isSearchActive: isSearchActive.isSearchActive,
    searchValue: isSearchActive.searchValue,
    toggleSearch,
    setSearchValue,
    turnOffSearch,
  }
}