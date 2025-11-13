import { StyleSheet, ViewStyle } from "react-native"
import { IconStyle } from "../Icon"
import { Colors } from "../../Styling"

export const styles = StyleSheet.create({
  icon: <IconStyle>{
    color: Colors.textPrimary,
    fontSize: 28,
  },
  invisibleIcon: <IconStyle>{
    opacity: 0,
  },
  backButton: <ViewStyle>{
    alignSelf: 'flex-start',
    height: 36,
  },
})