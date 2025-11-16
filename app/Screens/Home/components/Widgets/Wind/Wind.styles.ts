import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { Colors } from "../../../../../Styling"

export const styles = StyleSheet.create({
  detailsContainer: <ViewStyle>{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: <TextStyle>{
    color: Colors.textPrimary,
    fontSize: 14,
  },
  value: <TextStyle>{
    color: Colors.textSecondary,
    fontSize: 12,
  },
  divider: <ViewStyle>{
    marginVertical: 8,
  },
})