import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colors } from "../../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    marginHorizontal: 16,
    marginTop: 32,
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.backgroundSecondary,
  },
  contentContainer: <TextStyle>{
    fontSize: 16,
    color: Colors.textSecondary,
  },
})