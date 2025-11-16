import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colors } from "../../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    flex: 1,
    height: 42,
    justifyContent: "center",
  },
  cityText: <TextStyle>{
    color: Colors.textPrimary,
    fontSize: 16,
  },
})