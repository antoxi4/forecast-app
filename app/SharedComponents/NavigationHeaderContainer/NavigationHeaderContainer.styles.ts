import { StyleSheet, ViewStyle } from "react-native"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    zIndex: 1,
  },
})