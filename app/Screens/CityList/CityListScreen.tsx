import React from "react"
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native"

import { Header } from "./components/Header"
import { useNavigation } from "../../Navigation"
import { useBootstrap } from "../../Services/Bootstrap"
import { LookupCity } from "../../Api"
import { useCitiesSearch } from "./hooks/useCitiesSearch"

export const CityListScreen: React.FunctionComponent = () => {
  const { goBack } = useNavigation()
  const { api } = useBootstrap()

  const { 
    searchTextRef,
    searchValue, 
    isSearchActive, 
    setSearchValue,
    toggleSearch,
  } = useCitiesSearch()
  const [ cities, setCities ] = React.useState<Array<LookupCity>>([])

  const fetchCities = async(city: string) => {
    try {
      const response = await api.source.weather.lookupCity(city)

      setCities(response.data)
    } catch (error) {
      console.error('Error looking up cities:', error)
    }
  }

  React.useEffect(() => {
    if (isSearchActive && searchValue) {
      fetchCities(searchValue)
    }
  }, [ isSearchActive, searchValue ])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Header 
          textInputRef={searchTextRef}
          isSearchActive={isSearchActive} 
          onSearchValueChange={setSearchValue}
          onToggleSearch={toggleSearch}
          onPressBack={goBack}
        />
        <View>
          {cities.map((city) => (
            <View key={city.id}>
              <Text>{city.name}, {city.country}</Text>
            </View>
          ))}
        </View>
        {/* {isSearchActive && <View style={styles.overlay}/>} */}
      </View>
    </TouchableWithoutFeedback>
  )
}