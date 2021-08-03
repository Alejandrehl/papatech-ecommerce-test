import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <Text>PapaTech Ecommerce</Text>
        </View>
      </SafeAreaView>
    </Provider>
  )
}

export default App
