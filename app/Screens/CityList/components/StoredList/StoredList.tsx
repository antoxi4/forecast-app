import { useCallback, useState } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { LayoutAnimation, ScrollView, ViewStyle } from "react-native"

import { styles } from "./StoredList.styles"
import { useStoredCitiesList } from "../../../../Shared/hooks/useStoredCitiesList"
import { EmptyState } from "../EmptyState/EmptyState"
import { CancelableStoredListItem } from "../CancelableStoredListItem/CancelableStoredListItem"

export const StoredList: React.FunctionComponent = () => {
  const { bottom } = useSafeAreaInsets()
  const [ scrollEnabled, setScrollEnabled ] = useState(true)
  const { cities, activeCity, setActiveCity, deleteCity } = useStoredCitiesList()
  
  const hasNoCities = cities.length === 0
  const contentContainerStyle = { paddingBottom: bottom + 16 } as ViewStyle

  const handleDeleteCity = useCallback((cityId: number) => {
    if (deleteCity) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

      deleteCity(cityId)
    }
  }, [ deleteCity ])
  
  const onSwipeStart = useCallback(() => {
    setScrollEnabled(false)
  }, [])
  
  const onSwipeEnd = useCallback(() => {
    setScrollEnabled(true)
  }, [])

  if (hasNoCities) {
    return <EmptyState />
  }


  return (
    <ScrollView 
      style={styles.container} 
      scrollEnabled={scrollEnabled}
      contentContainerStyle={[ styles.contentContainer, contentContainerStyle ]}
    >
      {cities.map(city => (
        <CancelableStoredListItem
          key={city.id}
          cityId={city.id}
          cityName={city.name}
          cityCountry={city.country}
          selected={activeCity?.id === city.id}
          onPress={setActiveCity}
          onDelete={handleDeleteCity}
          onSwipeStart={onSwipeStart}
          onSwipeEnd={onSwipeEnd}
        />
      ))}
    </ScrollView>
  )
}