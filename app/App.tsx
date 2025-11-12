import {
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { StatusBar, View } from 'react-native'

import { Colors } from './Styling'
import { styles } from './App.styles'
import { Navigation } from './Navigation'
import { BootstrapContextProvider } from './Services/Bootstrap'

export const App: React.FunctionComponent = () => (
  <View style={styles.container}>
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
  </View>
)
