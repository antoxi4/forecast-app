import { useRef } from "react"
import { Animated, Easing, GestureResponderEvent, PanResponder, PanResponderGestureState, PanResponderInstance } from "react-native"

const SWIPE_THRESHOLD = -100

interface SwappableListItemResult {
  panResponder: PanResponderInstance
  animatedValue: Animated.Value
  backOnStart: () => Promise<void>
}

interface SwappableListItemParams {
  onSwipeStart?: () => void
  onSwipeEnd?: () => void
}

export const useSwappableListItem = (params: SwappableListItemParams = {}): SwappableListItemResult => {
  const animatedValue = useRef(new Animated.Value(0, { useNativeDriver: true })).current

  const panResponder = useRef(
    PanResponder.create({
      onPanResponderGrant: () => {
        // @ts-ignore - Accessing internal value
        animatedValue.setOffset(animatedValue._value)
        animatedValue.setValue(0)
      },
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_e: GestureResponderEvent, state: PanResponderGestureState) => {
        const isHorizontalSwipe = Math.abs(state.dx) > Math.abs(state.dy) && Math.abs(state.dx) > 5
        
        if (isHorizontalSwipe) {
          params.onSwipeStart?.()
        }
        return isHorizontalSwipe
      },

      onPanResponderMove: (_e: GestureResponderEvent, state: PanResponderGestureState) => {
        const newX = state.dx

        if (newX <= 0) {
          animatedValue.setValue(newX)
        } else {
          // @ts-ignore - Accessing internal value
          const offsetX = animatedValue._offset || 0

          if (offsetX < 0) {
            animatedValue.setValue(newX)
          }
        }
      },

      onPanResponderRelease: () => {
        params.onSwipeEnd?.()
        animatedValue.flattenOffset()
        
        // @ts-ignore - Accessing internal value
        const currentX = animatedValue._value

        if (currentX < SWIPE_THRESHOLD) {
          Animated.spring(animatedValue, {
            toValue: SWIPE_THRESHOLD * 1.5,
            useNativeDriver: true,
          }).start()
        } else {
          Animated.spring(animatedValue, {
            toValue: 0,
            useNativeDriver: true,
            friction: 8,
          }).start()
        }
      },

      onPanResponderTerminate: () => {
        Animated.spring(animatedValue, {
          toValue: 0,
          useNativeDriver: true,
        }).start()
      },
    }),
  ).current

  const backOnStart = async (): Promise<void> => {
    return new Promise<void>((resolve) => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 160,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => resolve())
    })
  }

  return { panResponder, animatedValue, backOnStart }
}