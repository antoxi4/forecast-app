import { ScrollView, ViewStyle } from "react-native"

import { styles } from "./StoredList.styles"
import { useStoredCitiesList } from "../../../../Shared/hooks/useStoredCitiesList"
import { StoredCityItem } from "../StoredCityItem"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const StoredList: React.FunctionComponent = () => {
  const { cities } = useStoredCitiesList()
  const { bottom } = useSafeAreaInsets()
  
  const contentContainerStyle = { paddingBottom: bottom + 16 } as ViewStyle

  return (
    <ScrollView style={styles.container} contentContainerStyle={[ styles.contentContainer, contentContainerStyle ]}>
      {cities.map(city => (
        <StoredCityItem
          key={city.id}
          cityId={city.id}
          cityName={city.name}
          cityCountry={city.country}
        />
      ))}
    </ScrollView>
  )
}