import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { IconStyle } from "../Icon"
import { Colors } from "../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: <ViewStyle>{
    position: "relative",
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  icon: <IconStyle>{
    fontSize: 20,
    color: Colors.textPrimary,
  },
  loadingIndicator: <ViewStyle>{
    width: 20,
    height: 20,
  },
  placeholderContainer: <ViewStyle>{
    ...StyleSheet.absoluteFill,
    marginLeft: 2,
    justifyContent: "center",
  },
  textInput: <TextStyle>{
    padding: 0,
  },
})