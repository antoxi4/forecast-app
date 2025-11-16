import { StyleSheet, ViewStyle } from "react-native"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    paddingHorizontal: 16,
    marginTop: 44, 
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 12,
  },
  splittedRow: <ViewStyle>{ 
    flexDirection: 'row', 
    gap: 12, 
    flex: 1,
  },
})