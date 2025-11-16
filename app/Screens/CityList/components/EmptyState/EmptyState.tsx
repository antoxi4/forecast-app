import React from "react"
import { Text, View } from "react-native"

import { styles } from "./EmptyState.styles"

export const EmptyState: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.contentContainer}>No cities stored.</Text>
    </View>
  )
}