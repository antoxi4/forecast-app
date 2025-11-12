import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { Colors } from "../../../../Styling"
import { IconButtonStyle, IconStyle } from "../../../../SharedComponents/Icon"


export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    columnGap: 12,
    marginHorizontal: 16,
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
  locationButton: <IconButtonStyle> {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: <IconStyle>{
    color: Colors.textPrimary,
    fontSize: 32,
  },
})