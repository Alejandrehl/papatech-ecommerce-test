import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HeaderShoppingCart from '../components/HeaderShoppingCart'
import CheckoutScreen from '../screens/Checkout/index'
import ProductScreen from '../screens/Products/index'

const Stack = createNativeStackNavigator()

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="products">
        <Stack.Screen
          name="products"
          component={ProductScreen}
          options={{
            title: 'Productos',
            headerRight: () => <HeaderShoppingCart />,
          }}
        />
        <Stack.Screen
          name="checkout"
          component={CheckoutScreen}
          options={{ title: 'Checkout' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
