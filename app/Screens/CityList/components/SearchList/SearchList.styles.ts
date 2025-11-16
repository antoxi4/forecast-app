import { StyleSheet, ViewStyle } from "react-native"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    ...StyleSheet.absoluteFill,
    paddingHorizontal: 16,
  },
  contentContainer: <ViewStyle>{
    paddingTop: 16,
  },
})