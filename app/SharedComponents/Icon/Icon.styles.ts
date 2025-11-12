import { Platform, StyleSheet, TextStyle } from "react-native"

export const styles = StyleSheet.create( {
  container: <TextStyle>{
    fontFamily: Platform.select( { ios: 'MaterialIcons-Regular', android: 'materialicons_regular' } ),
  }
} )