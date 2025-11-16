import { Text, TouchableOpacity } from "react-native"

import { styles } from "./StoredCityItem.styles"
import { memo } from "react"

interface StoredCityItemProps {
  cityId: number
  cityName: string
  cityCountry: string
  currentTemperature?: number
  currentCondition?: string
  onPress?: (id: number) => void
}

export const StoredCityItemComponent: React.FunctionComponent<StoredCityItemProps> = ({ cityId, cityName, cityCountry, currentTemperature, currentCondition, onPress }: StoredCityItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress ? () => onPress(cityId) : undefined}>
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
    </TouchableOpacity>
  )
}

export const StoredCityItem = memo(StoredCityItemComponent)

