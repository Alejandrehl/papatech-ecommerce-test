import React from 'react'
import { Provider } from 'react-redux'

import 'react-native-gesture-handler'

import AppNavigator from './src/navigator'
import store from './src/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
