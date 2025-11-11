import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { NewAppScreen } from '@react-native/new-app-screen'
import { StatusBar, StyleSheet, View } from 'react-native'

export const App: React.FunctionComponent = () => (
  <SafeAreaProvider>
    <StatusBar barStyle='light-content' />
    <AppContent />
  </SafeAreaProvider>
)

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName='App.tsx'
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
} )

export default App
