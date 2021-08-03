import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-elements'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CartScreen from '../screens/Cart/index'
import ProductScreen from '../screens/Products/index'

import styles from './styles'

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
            headerRight: () => (
              <TouchableOpacity
                onPress={() => console.log('Desplegar overlay de productos')}>
                <FontAwesomeIcon icon={faShoppingCart} size={25} />
                <Badge
                  status="warning"
                  containerStyle={styles.badge}
                  value={0}
                />
              </TouchableOpacity>
            ),
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
