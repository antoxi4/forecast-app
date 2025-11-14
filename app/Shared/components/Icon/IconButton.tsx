import { StyleProp, ViewStyle, TouchableOpacityProps, TouchableOpacity } from "react-native"

import { Icon, IconProps } from "./Icon"
import { styles } from "./Icon.styles"

export type IconButtonStyle = ViewStyle
export interface IconButtonProps extends Omit<TouchableOpacityProps, "style">, IconProps {
  buttonStyle?: StyleProp<ViewStyle>;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = ( 
  { buttonStyle: backgroundStyle, name, style, ...viewProps }: IconButtonProps 
) => (
  <TouchableOpacity style={[ styles.buttonStyle, backgroundStyle ]} {...viewProps}>
    <Icon name={name} style={style} />
  </TouchableOpacity>
)