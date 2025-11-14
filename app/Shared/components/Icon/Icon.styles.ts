import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native"

export const styles = StyleSheet.create({
  container: <TextStyle>{
    fontFamily: Platform.select({ ios: 'MaterialIcons-Regular', android: 'materialicons_regular' }),
  },
  buttonStyle: <ViewStyle>{
    justifyContent: 'center',
    alignItems: 'center',
  },
})