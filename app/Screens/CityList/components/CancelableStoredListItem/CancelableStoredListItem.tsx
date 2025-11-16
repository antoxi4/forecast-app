import React, { useMemo } from "react"
import { View, Animated, TouchableOpacity, Text } from "react-native"

import { styles } from "./CancelableStoredListItem.styles"
import { useSwappableListItem } from "../../hooks/useSwappableListItem"
import { StoredCityItemComponent, StoredCityItemProps } from "../StoredCityItem"


interface CancelableStoredListItemProps extends StoredCityItemProps {
  onDelete?: (id: number) => void
  onSwipeStart?: () => void
  onSwipeEnd?: () => void
}

export const CancelableStoredListItem: React.FunctionComponent<CancelableStoredListItemProps> = (
  { onDelete, onSwipeStart, onSwipeEnd, ...originalProps }: CancelableStoredListItemProps
) => {
  const { panResponder, animatedValue, backOnStart } = useSwappableListItem({ onSwipeStart, onSwipeEnd })

  const animatedStyle = useMemo(() =>({
    flex: 1,
    transform: [ { translateX: animatedValue } ],
  }), [ animatedValue ])

  const backContainerStyle = useMemo(
    () => ({
      ...styles.backContainer,
      opacity: animatedValue.interpolate({
        inputRange: [ -150, -50, 0 ],
        outputRange: [ 1, 0.5, 0 ],
        extrapolate: 'clamp',
      }),
    }),
    [ animatedValue ],
  )

  const handleDelete = async (): Promise<void> => {
    // @ts-ignore - Accessing internal value
    const currentX = animatedValue._value
    
    if (onDelete && currentX < 0) {
      await backOnStart()
      onDelete(originalProps.cityId)
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={animatedStyle}
        {...panResponder.panHandlers}
      >
        <StoredCityItemComponent {...originalProps} />
      </Animated.View>
      <Animated.View style={backContainerStyle}>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}