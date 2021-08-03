import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import 'react-native-gesture-handler'

import AppNavigator from './src/navigator'
import store from './src/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
