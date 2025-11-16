import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { IconStyle } from "../../../../../Shared/components/Icon"
import { Colors } from "../../../../../Styling"

export const styles = StyleSheet.create({
  container: <ViewStyle>{
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: 'column',
    padding: 12,
    backgroundColor: Colors.backgroundTertiary,
  },
  containerWithoutHeightAdjustment: <ViewStyle>{
    aspectRatio: 1/1,
  },
  headerContainer: <ViewStyle>{
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 14,
  },
  title: <TextStyle>{
    marginLeft: 6,
    color: Colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  icon: <IconStyle>{
    color: Colors.textSecondary,
    fontSize: 14,
  },
})