import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { Colors } from "../../Styling"
import { IconStyle } from "../../SharedComponents/Icon"

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    columnGap: 12,
  },
  locationContainer: <ViewStyle>{
    flex: 1,
    flexDirection: "column",
  },
  city: <TextStyle>{
    color: Colors.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
  },
  date: <TextStyle>{
    color: Colors.textSecondary,
    fontSize: 16,
  },  
  temperature: <TextStyle>{
    color: Colors.textPrimary,
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 42,
  },
  locationIcon: <IconStyle>{
    color: Colors.textPrimary,
    fontSize: 32,
  },
})