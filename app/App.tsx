import {
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { BootstrapContextProvider } from './Services/Bootstrap'
import { Navigation } from './Navigation'

export const App: React.FunctionComponent = () => (
  <SafeAreaProvider>
    <StatusBar barStyle='light-content' />
    <BootstrapContextProvider>
      <Navigation />
    </BootstrapContextProvider>
  </SafeAreaProvider>
)
