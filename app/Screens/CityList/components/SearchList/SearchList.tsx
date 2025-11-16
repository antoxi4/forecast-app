import { memo } from "react"
import { ViewStyle } from "react-native"

import { styles } from "./SearchList.styles"
import { LookupCity } from "../../../../Api"
import { SearchCityItem } from "../SearchCityItem"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

interface SearchListProps {
  foundCities: Array<LookupCity>
  onCityPress?: (city: LookupCity) => void
}

export const SearchListComponent: React.FunctionComponent<SearchListProps> = ({ foundCities, onCityPress }: SearchListProps) => {
  const { bottom } = useSafeAreaInsets()

  const contentContainerStyle = { paddingBottom: bottom + 16 } as ViewStyle

  return (
    <KeyboardAwareScrollView 
      style={styles.container} 
      contentContainerStyle={[ styles.contentContainer, contentContainerStyle ]}
    >
      {foundCities.map(city => (
        <SearchCityItem 
          key={city.id} 
          city={city} 
          onPress={onCityPress} 
        />
      ))}
    </KeyboardAwareScrollView>
  )
}

export const SearchList = memo(SearchListComponent)
