import { StyleSheet, TextStyle } from "react-native"
import { Colors } from "../../Styling"

export const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cityTitle: <TextStyle>{
    // color: Colors.textSecondary,
    // fontFamily: "MaterialIcons-Regular",
    fontFamily: "materialicons_regular",
    // fontWeight: "regular",
    fontSize: 82,
    width: 82,
    height: 82,
    color: Colors.accentPrimary,
  } 
} )