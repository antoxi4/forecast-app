import { StyleSheet, ViewStyle } from "react-native"

import { Colors } from "../../../Styling"
import { IconStyle } from "../Icon"
import { DEFAULT_HEADER_HEIGHT } from "./Constants"

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
    height: DEFAULT_HEADER_HEIGHT,
  },
})