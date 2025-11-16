import React, { useCallback } from "react"
import { View } from "react-native"

import { Header } from "./components/Header"
import { useNavigation } from "../../Navigation"
import { useCitiesSearch } from "./hooks/useCitiesSearch"
import { LookupCity } from "../../Api"
import { SearchList } from "./components/SearchList"
import { StoredList } from "./components/StoredList/StoredList"
import { styles } from "./CityListScreen.styles"
import { useStoreCity } from "../../Shared/hooks/useStoreCities"

export const CityListScreen: React.FunctionComponent = () => {
  const { goBack } = useNavigation()

  const { 
    foundCities, 
    searchTextRef,
    isSearchActive, 
    setSearchValue,
    toggleSearch,
    turnOffSearch,
  } = useCitiesSearch()
  const { storeCity } = useStoreCity()


  const onSelectCity = useCallback((city: LookupCity) => {
    storeCity(city)
    turnOffSearch()
  }, [ storeCity, turnOffSearch ])

  return (
  
    <>
      <Header 
        textInputRef={searchTextRef}
        isSearchActive={isSearchActive} 
        onSearchValueChange={setSearchValue}
        onToggleSearch={toggleSearch}
        onPressBack={goBack}
      />

      <View style={styles.listContainer} >
        {isSearchActive 
          ? <SearchList foundCities={foundCities} onCityPress={onSelectCity} /> 
          : <StoredList />
        }
      </View>
    </>
  )
}