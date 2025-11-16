import { useCallback } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { LayoutAnimation, ScrollView, ViewStyle } from "react-native"

import { styles } from "./StoredList.styles"
import { useStoredCitiesList } from "../../../../Shared/hooks/useStoredCitiesList"
import { EmptyState } from "../EmptyState/EmptyState"
import { CancelableStoredListItem } from "../CancelableStoredListItem/CancelableStoredListItem"

export const StoredList: React.FunctionComponent = () => {
  const { bottom } = useSafeAreaInsets()
  const { cities, activeCity, setActiveCity, deleteCity } = useStoredCitiesList()
  
  const hasNoCities = cities.length === 0
  const contentContainerStyle = { paddingBottom: bottom + 16 } as ViewStyle

  const handleDeleteCity = useCallback((cityId: number) => {
    if (deleteCity) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

      deleteCity(cityId)
    }
  }, [ deleteCity ])

  if (hasNoCities) {
    return <EmptyState />
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={[ styles.contentContainer, contentContainerStyle ]}>
      {cities.map(city => (
        <CancelableStoredListItem
          key={city.id}
          cityId={city.id}
          cityName={city.name}
          cityCountry={city.country}
          selected={activeCity?.id === city.id}
          onPress={setActiveCity}
          onDelete={handleDeleteCity}
        />
      ))}
    </ScrollView>
  )
}