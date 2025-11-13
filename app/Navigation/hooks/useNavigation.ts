import { NavigationState } from "../NavigationState"

export const useNavigation = () => {
  return NavigationState.shared.navigation
}