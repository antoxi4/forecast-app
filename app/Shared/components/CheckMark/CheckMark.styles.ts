import { StyleSheet, ViewStyle } from "react-native"
import { Colors } from "../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{},
  outerCircle: <ViewStyle>{
    flex: 1,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: Colors.textPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: <ViewStyle>{
    width: "60%",
    height: "60%",
    borderRadius: 9999,
    backgroundColor: Colors.textPrimary,
  },
})