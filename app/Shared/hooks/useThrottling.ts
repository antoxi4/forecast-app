import { useCallback, useRef } from "react"

export type UseThrottling = (callback: () => void) => void

export const useThrottling = (delayInMs: number): UseThrottling => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const throttler = useCallback((callback: () => void) => {

    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    timeoutRef.current = setTimeout(() => {
      callback()
      clearTimeout(timeoutRef.current as NodeJS.Timeout)    
      timeoutRef.current = null
    }, delayInMs)
  }, [])

  return throttler
}