import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { Colors } from "../../../../Styling"
import { IconButtonStyle, IconStyle } from "../../../../SharedComponents/Icon"


export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  locationContainer: <ViewStyle>{
    flex: 1,
    flexDirection: "column",
  },
  city: <TextStyle>{
    flexWrap: 'nowrap',
    color: Colors.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
  },
  date: <TextStyle>{
    color: Colors.textSecondary,
    fontSize: 14,
  },
  cityListButton: <IconButtonStyle> {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: <IconStyle>{
    color: Colors.textPrimary,
    fontSize: 32,
  },
})