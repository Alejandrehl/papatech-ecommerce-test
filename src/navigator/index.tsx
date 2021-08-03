import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HeaderShoppingCart from '../components/HeaderShoppingCart'
import CartScreen from '../screens/Cart/index'
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
          name="cart"
          component={CartScreen}
          options={{ title: 'Carrito de compras' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
