import React from "react"

import { Header } from "./components/Header"
import { useNavigation } from "../../Navigation"
import { useBootstrap } from "../../Services/Bootstrap"
import { LookupCity } from "../../Api"
import { Text, View } from "react-native"

export const CityListScreen: React.FunctionComponent = () => {
  const { goBack } = useNavigation()
  const { api } = useBootstrap()
  const [ isSearchActive, setIsSearchActive ] = React.useState(false)
  const [ searchValue, setSearchValue ] = React.useState("")
  const [ cities, setCities ] = React.useState<Array<LookupCity>>([])

  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev)
  }

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
    <>
      <Header 
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
    </>
  )
}