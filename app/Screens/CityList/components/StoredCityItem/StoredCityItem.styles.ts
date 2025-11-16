import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colors } from "../../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
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
  cityInfoContainer: <ViewStyle>{
    flexDirection: "column",
    flex: 1,
    marginRight: 8,
  },
})