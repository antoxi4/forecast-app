import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colors } from "../../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    flex: 1,
    justifyContent: "center",
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.backgroundTertiary,
  },
  cityName: <TextStyle>{
    color: Colors.textPrimary,
    fontSize: 16,
  },
  cityCountry: <TextStyle>{
    color: Colors.textSecondary,
    fontSize: 14,
  },
})