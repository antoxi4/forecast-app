import { StyleSheet, TextStyle } from "react-native"

import { Colors } from "../../../../../Styling"

export const styles = StyleSheet.create({
  feelsLikeTemp: <TextStyle>{
    color: Colors.textPrimary,
    fontSize: 44,
  },
  actualTemp: <TextStyle>{
    color: Colors.textSecondary,
    fontSize: 20,
  },
})