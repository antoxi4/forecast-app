import { memo } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./StoredCityItem.styles"
import { CheckMark } from "../../../../Shared/components/CheckMark"

export interface StoredCityItemProps {
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
    <TouchableOpacity 
      activeOpacity={0.7} 
      style={styles.container} 
      onPress={onPress ? () => onPress(cityId) : undefined}
    >
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

