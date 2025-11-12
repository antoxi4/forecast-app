import { StyleProp, ViewStyle, TouchableOpacityProps, TouchableOpacity } from "react-native"

import { Icon, IconProps } from "./Icon"

export interface IconButtonProps extends Omit<TouchableOpacityProps, "style">, IconProps {
  buttonStyle?: StyleProp<ViewStyle>;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = ( 
  { buttonStyle: backgroundStyle, name, style, ...viewProps }: IconButtonProps 
) => {
  return <TouchableOpacity style={backgroundStyle} {...viewProps}><Icon name={name} style={style} /></TouchableOpacity>
}