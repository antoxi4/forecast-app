import { useCallback, useEffect, useRef } from "react"

interface UsePollingResult {
  setCallback: (newCallback: () => Promise<void>) => void
}

export const usePolling = (intervalInMs: number): UsePollingResult => {
  const callbackRef = useRef<() => Promise<void>>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startPolling = useCallback(() => {
    intervalRef.current = setTimeout(async () => {
      try {
        if (callbackRef.current) {
          await callbackRef.current()
        }
      } catch (error) {
        console.error("Error during polling callback:", error)
      } finally {
        if (intervalRef.current) {
          clearTimeout(intervalRef.current)
        }
    
        startPolling()
      }

    }, intervalInMs)
  }, [ intervalInMs ])

  const setCallback = useCallback((newCallback: () => Promise<void>) => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
    }

    callbackRef.current = newCallback
    startPolling()
  }, [ startPolling ])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [])


  return { setCallback }
}