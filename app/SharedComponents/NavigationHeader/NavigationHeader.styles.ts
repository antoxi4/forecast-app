import { StyleSheet, ViewStyle } from "react-native"
import { IconStyle } from "../Icon"
import { Colors } from "../../Styling"

export const styles = StyleSheet.create({
  icon: <IconStyle>{
    color: Colors.textPrimary,
    fontSize: 28,
  },
  backButton: <ViewStyle>{
    width: 36,
    height: 36,
  },
})