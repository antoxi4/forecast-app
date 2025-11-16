import { StyleSheet, View, ViewProps } from "react-native"

import { styles } from "./CheckMark.styles"

export interface CheckMarkProps extends ViewProps{
  size?: number
  checked?: boolean
}

export const CheckMark: React.FunctionComponent<CheckMarkProps> = ({ size, style, checked = false, ...originalProps }: CheckMarkProps) => {
  const containerFlattenedStyle = StyleSheet.flatten([ { width: size, height: size }, style ])

  return (
    <View style={containerFlattenedStyle} {...originalProps}>
      <View style={styles.outerCircle}>
        {checked && <View style={styles.innerCircle} />}
      </View>
    </View>
  )
}