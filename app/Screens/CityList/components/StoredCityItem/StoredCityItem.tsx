import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./StoredCityItem.styles"
import { memo } from "react"
import { CheckMark } from "../../../../Shared/components/CheckMark"

interface StoredCityItemProps {
  cityId: number
  cityName: string
  selected: boolean
  cityCountry: string
  onPress?: (id: number) => void
}

export const StoredCityItemComponent: React.FunctionComponent<StoredCityItemProps> = ({ 
  cityId, 
  cityName, 
  cityCountry,
  selected,
  onPress, 
}: StoredCityItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress ? () => onPress(cityId) : undefined}>
      <View style={styles.cityInfoContainer}>
        <Text 
          numberOfLines={1} 
          style={styles.cityName}
        >
          {cityName}
        </Text>
        <Text 
          numberOfLines={1} 
          style={styles.cityCountry}
        >
          {cityCountry}
        </Text>
      </View>
      <CheckMark
        size={24}
        checked={selected}
      />
    </TouchableOpacity>
  )
}

export const StoredCityItem = memo(StoredCityItemComponent)

