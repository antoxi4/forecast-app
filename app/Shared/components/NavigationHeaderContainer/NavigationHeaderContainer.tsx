import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"

import { styles } from "./NavigationHeaderContainer.styles"

export type NavigationHeaderContainerProps = SafeAreaViewProps

const defaultEdges = [ 'top' ] as const
export const NavigationHeaderContainer: React.FunctionComponent<NavigationHeaderContainerProps> = ({ 
  style,
  edges = defaultEdges,
  ...props
}: NavigationHeaderContainerProps) => (
  <SafeAreaView style={[ styles.container, style ]} edges={edges} {...props}/>
)