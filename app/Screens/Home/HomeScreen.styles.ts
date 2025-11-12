import { StyleSheet, TextStyle } from "react-native"
import { Colors } from "../../Styling"
import { IconStyle } from "../../SharedComponents/Icon"

export const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cityTitle: <TextStyle>{
    color: Colors.textSecondary,
    fontSize: 82,
  },
  icon: <IconStyle>{
    color: Colors.accentPrimary,
    fontSize: 82,
    backgroundColor: Colors.backgroundSecondary,
  }
} )