import { ImageStyle, StyleSheet, TextStyle } from "react-native"

import { Colors } from "../../Styling"

export const styles = StyleSheet.create({
  weatherStateImage: <ImageStyle>{
    marginTop: 36,
    alignSelf: 'center',
  },
  temperature: <TextStyle>{
    alignSelf: 'center',
    color: Colors.textPrimary,
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 52,
  },
  condition: <TextStyle>{
    alignSelf: 'center',
    color: Colors.textPrimary,
    marginTop: 6,
    fontSize: 16,
  },
})