import { TextInput } from "react-native"
import { RefObject, useCallback, useState } from "react"

interface SearchState {
  isSearchActive: boolean;
  searchValue: string;
}

interface UseCitiesSearchResult {
  searchTextRef: RefObject<TextInput>;
  searchValue: string;
  isSearchActive: boolean;
  toggleSearch: () => void;
  setSearchValue: (value: string) => void;
}

export const useCitiesSearch = (): UseCitiesSearchResult => {
  const searchTextRef = {} as RefObject<TextInput>
  const [ 
    isSearchActive, 
    setIsSearchActive, 
  ] = useState<SearchState>({ isSearchActive: false, searchValue: '' })

  const toggleSearch = useCallback(() => {
    setIsSearchActive((prevState) => ({ 
      isSearchActive: !prevState.isSearchActive, 
      searchValue: '', 
    }))
  }, [])

  const setSearchValue = useCallback((value: string) => {
    setIsSearchActive((prevState) => ({
      ...prevState,
      searchValue: value,
    }))
  }, [])

  return {
    searchTextRef,
    isSearchActive: isSearchActive.isSearchActive,
    searchValue: isSearchActive.searchValue,
    toggleSearch,
    setSearchValue,
  }
}