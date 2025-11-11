import {
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'

import { Navigation } from './Navigation'
import { BootstrapContextProvider } from './Services/Bootstrap'

export const App: React.FunctionComponent = () => (
  <SafeAreaProvider>
    <StatusBar barStyle='light-content' />
    <BootstrapContextProvider>
      <Navigation />
    </BootstrapContextProvider>
  </SafeAreaProvider>
)
