import { useMemo } from "react"
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export type SafeAreaScrollViewEdges = ('top' | 'bottom' | 'left' | 'right')[]
export type SafeAreaScrollViewEdgeMerge = {
  [key in SafeAreaScrollViewEdges[number]]?: number
}
export interface SafeAreaScrollViewProps extends ScrollViewProps {
  safeAreaEdges?: SafeAreaScrollViewEdges;
  safeAreaEdgeMerge?: SafeAreaScrollViewEdgeMerge;
}

export const SafeAreaScrollView: React.FunctionComponent<SafeAreaScrollViewProps> = ({ safeAreaEdgeMerge, safeAreaEdges, contentContainerStyle, ...props }: SafeAreaScrollViewProps) => {
  const { top, left, right, bottom } = useSafeAreaInsets()

  const mergedContentContainerStyle = useMemo(() => StyleSheet.flatten([
    safeAreaEdges?.includes('top') && { paddingTop: (safeAreaEdgeMerge?.top ?? 0) + top },
    safeAreaEdges?.includes('bottom') && { paddingBottom: (safeAreaEdgeMerge?.bottom ?? 0) + bottom },
    safeAreaEdges?.includes('left') && { paddingLeft: (safeAreaEdgeMerge?.left ?? 0) + left },
    safeAreaEdges?.includes('right') && { paddingRight: (safeAreaEdgeMerge?.right ?? 0) + right },
    contentContainerStyle,
  ]), [ contentContainerStyle, top, bottom, left, right, safeAreaEdges ])

  return <ScrollView contentContainerStyle={mergedContentContainerStyle} {...props} />
}