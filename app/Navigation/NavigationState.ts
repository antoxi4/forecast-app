import { createNavigationContainerRef, NavigationContainerRefWithCurrent } from '@react-navigation/native'

import { NavigationParameters } from './NavigationParameters'

type NavigationRef = NavigationContainerRefWithCurrent<NavigationParameters>

class NavigationState {
  public navigationRef: NavigationRef
  public static shared: NavigationState = new NavigationState()

  constructor() {
    this.navigationRef = createNavigationContainerRef<NavigationParameters>()
  }

  public get navigation(): NavigationContainerRefWithCurrent<NavigationParameters> {
    if (this.navigationRef) {
      return this.navigationRef
    }

    throw new Error('Attempt to get an not defined navigation')
  }
}

export {
  NavigationState,
}
