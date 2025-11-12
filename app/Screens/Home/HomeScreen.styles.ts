import { StyleSheet, TextStyle } from "react-native"
import { Colors } from "../../Styling"

export const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cityTitle: <TextStyle>{
    color: Colors.textPrimary,
    fontSize: 32,
  } 
} )