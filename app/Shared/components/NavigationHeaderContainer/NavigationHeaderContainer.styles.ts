import { StyleSheet, ViewStyle } from "react-native"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    zIndex: 1,
  },
})