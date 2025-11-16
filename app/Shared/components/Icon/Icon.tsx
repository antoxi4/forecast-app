import { useMemo } from "react"
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"

import { styles } from "./Icon.styles"
import { IconName } from "./Constants"

export type IconStyle = Omit<TextStyle, 'fontFamily' | 'width' | 'height'> 

export interface IconProps {
  name: IconName;
  style?: StyleProp<IconStyle>;
}

export const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const mergedStyles = useMemo(() => {
    const flattedStyles = StyleSheet.flatten([ styles.container, props.style ])
    const { fontSize } = flattedStyles

    return {
      ...flattedStyles,
      width: fontSize,
      height: fontSize,
    }
  }, [ props.style ])


  return <Text style={mergedStyles}>{props.name}</Text>
}