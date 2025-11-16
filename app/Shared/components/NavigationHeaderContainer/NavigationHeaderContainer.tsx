import { useSafeAreaInsets } from "react-native-safe-area-context"
import { StyleSheet, View, ViewProps } from "react-native"

import { styles } from "./NavigationHeaderContainer.styles"

export type NavigationHeaderContainerProps = ViewProps

export const NavigationHeaderContainer: React.FunctionComponent<NavigationHeaderContainerProps> = ({ 
  style,
  ...props
}: NavigationHeaderContainerProps) => {
  const { top } = useSafeAreaInsets()
  const viewFlattenedStyle = StyleSheet.flatten([ styles.container, { marginTop: top }, style ])
  
  return (
    <View style={viewFlattenedStyle} {...props}/>
  )
}