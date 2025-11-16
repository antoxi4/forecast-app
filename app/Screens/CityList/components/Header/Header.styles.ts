import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { Colors } from "../../../../Styling"
import { IconStyle } from "../../../../Shared/components/Icon"
import { DEFAULT_HEADER_HEIGHT } from "../../../../Shared/components/NavigationHeader"


export const styles = StyleSheet.create({
  locationContainer: <TextStyle>{
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    height: DEFAULT_HEADER_HEIGHT,
    backgroundColor: Colors.backgroundTertiary,
  },
  locationText: <TextStyle>{
    fontSize: 16,
    color: Colors.textPrimary,
    lineHeight: 18,
  },
  placeHolderText: <TextStyle>{
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 18,
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
  cancelButton: <ViewStyle>{
    marginLeft: 12,
    justifyContent: "center",
  },
  cancelButtonText: <TextStyle>{
    color: Colors.textPrimary,
    fontSize: 16,
  },
})