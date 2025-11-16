import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ScrollView, ViewStyle } from "react-native"

import { styles } from "./StoredList.styles"
import { useStoredCitiesList } from "../../../../Shared/hooks/useStoredCitiesList"
import { StoredCityItem } from "../StoredCityItem"
import { EmptyState } from "../EmptyState/EmptyState"

export const StoredList: React.FunctionComponent = () => {
  const { bottom } = useSafeAreaInsets()
  const { cities, activeCity, setActiveCity } = useStoredCitiesList()
  
  const hasNoCities = cities.length === 0
  const contentContainerStyle = { paddingBottom: bottom + 16 } as ViewStyle

  if (hasNoCities) {
    return <EmptyState />
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={[ styles.contentContainer, contentContainerStyle ]}>
      {cities.map(city => (
        <StoredCityItem
          key={city.id}
          cityId={city.id}
          cityName={city.name}
          cityCountry={city.country}
          selected={activeCity?.id === city.id}
          onPress={setActiveCity}
        />
      ))}
    </ScrollView>
  )
}