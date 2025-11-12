import {
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'

import { Navigation } from './Navigation'
import { BootstrapContextProvider } from './Services/Bootstrap'
import { Colors } from './Styling'

export const App: React.FunctionComponent = () => (
  <SafeAreaProvider>
    <StatusBar 
      translucent 
      barStyle='light-content' 
      backgroundColor={Colors.backgroundPrimary}
    />
    <BootstrapContextProvider>
      <Navigation />
    </BootstrapContextProvider>
  </SafeAreaProvider>
)
