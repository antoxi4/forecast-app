import { useMemo } from "react"
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export type SafeAreaScrollViewEdges = ('top' | 'bottom' | 'left' | 'right')[]

export interface SafeAreaScrollViewProps extends ScrollViewProps {
  safeAreaEdges?: SafeAreaScrollViewEdges;
}

export const SafeAreaScrollView: React.FunctionComponent<SafeAreaScrollViewProps> = ({ contentContainerStyle, ...props }: SafeAreaScrollViewProps) => {
  const { top, left, right, bottom } = useSafeAreaInsets()

  const mergedContentContainerStyle = useMemo(() => StyleSheet.flatten([
    props.safeAreaEdges?.includes('top') && { paddingTop: top },
    props.safeAreaEdges?.includes('bottom') && { paddingBottom: bottom },
    props.safeAreaEdges?.includes('left') && { paddingLeft: left },
    props.safeAreaEdges?.includes('right') && { paddingRight: right },
    contentContainerStyle,
  ]), [ contentContainerStyle, top, bottom, left, right, props.safeAreaEdges ])

  return <ScrollView contentContainerStyle={mergedContentContainerStyle} {...props} />
}