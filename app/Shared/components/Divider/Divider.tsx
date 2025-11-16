import { View, ViewProps } from "react-native"

import { styles } from "./Divider.styles"

export interface DividerProps extends ViewProps {}
export const Divider: React.FunctionComponent<DividerProps> = ({ style, ...originalProps }: DividerProps) => (
  <View 
    style={[ styles.container, style ]} 
    {...originalProps} 
  />
)