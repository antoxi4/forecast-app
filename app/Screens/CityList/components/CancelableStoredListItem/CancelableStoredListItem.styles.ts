import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colors } from "../../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    flex: 1,
    position: "relative",
  },
  backContainer: <ViewStyle>{
    ...StyleSheet.absoluteFill,
    borderRadius: 16,
    backgroundColor: Colors.backgroundSecondary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 16,
    zIndex: -1,
  },
  deleteText: <TextStyle>{
    color: Colors.danger,
    fontWeight: 'bold',
    padding: 16,
  },
})