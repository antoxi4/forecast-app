import { StyleProp, View, ViewStyle, ViewProps } from "react-native"

import { Icon, IconProps } from "./Icon"

export interface IconWithBackgroundProps extends Omit<ViewProps, "style">, IconProps {
  backgroundStyle?: StyleProp<ViewStyle>;
}

export const IconWithBackground: React.FunctionComponent<IconWithBackgroundProps> = ( 
  { backgroundStyle, name, style, ...viewProps }: IconWithBackgroundProps 
) => {
  return <View style={backgroundStyle} {...viewProps}><Icon name={name} style={style} /></View>
}