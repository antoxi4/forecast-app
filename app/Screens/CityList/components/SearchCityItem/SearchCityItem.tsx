import { Text, TouchableOpacity } from "react-native"

import { LookupCity } from "../../../../Api"
import { styles } from "./SearchCityItem.styles"

interface SearchCityItemProps {
  city: LookupCity
  onPress?: (city: LookupCity) => void
}

export const SearchCityItem: React.FunctionComponent<SearchCityItemProps> = ({ city, onPress }: SearchCityItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress ? () => onPress(city) : undefined}>
      <Text 
        numberOfLines={1} 
        style={styles.cityText}
      >
        {city.name}, {city.country}
      </Text>
    </TouchableOpacity>
  )
}