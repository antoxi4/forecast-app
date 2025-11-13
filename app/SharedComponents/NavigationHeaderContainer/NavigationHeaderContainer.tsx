import { styles } from "./NavigationHeaderContainer.styles"
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"

export type NavigationHeaderContainerProps = SafeAreaViewProps

export const NavigationHeaderContainer: React.FunctionComponent<NavigationHeaderContainerProps> = ({ 
  style, 
  ...props
}: NavigationHeaderContainerProps) => (
  <SafeAreaView style={[ styles.container, style ]} {...props} />
)