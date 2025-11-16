import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { IconStyle } from "../Icon"
import { Colors } from "../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    flex: 1,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: <ViewStyle>{
    flex: 1,
    marginLeft: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon: <IconStyle>{
    fontSize: 20,
    color: Colors.textPrimary,
  },
  placeholder: <TextStyle>{
    position: "absolute",
    left: 0,
    justifyContent: "center",
  },
  loadingIndicator: <ViewStyle>{
    width: 20,
    height: 20,
  },
})