import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { Colors } from "../../../../Styling"
import { IconStyle } from "../../../../SharedComponents/Icon"
import { DEFAULT_HEADER_HEIGHT } from "../../../../SharedComponents/NavigationHeader"


export const styles = StyleSheet.create({
  locationContainer: <TextStyle>{
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    height: DEFAULT_HEADER_HEIGHT,
    flexDirection: "column",
    color: Colors.textPrimary,
    backgroundColor: Colors.backgroundTertiary,
  },
  cityListButton: <ViewStyle> {
    alignSelf: 'flex-end',
    height: DEFAULT_HEADER_HEIGHT,
    marginLeft: 12,
    
  },
  icon: <IconStyle>{
    color: Colors.textPrimary,
    fontSize: 32,
  },
})