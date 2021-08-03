import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import currency from 'currency.js'

import { CartProduct } from '../../redux/reducers/cart.reducer'

import styles from './styles'

type Props = {
  readonly cartProduct: CartProduct
}

const CartProductCard: React.FC<Props> = ({ cartProduct }) => {
  return (
    <View key={cartProduct.product.id} style={styles.container}>
      <View style={styles.content}>
        <Avatar
          rounded
          source={{
            uri: cartProduct.product.image,
          }}
        />
        <View style={styles.infoView}>
          <Text style={styles.nameText}>{cartProduct.product.name}</Text>
          <Text style={styles.typeText}>{cartProduct.product.type}</Text>
          <View style={styles.amountView}>
            <Text>
              {currency(cartProduct.product.price, {
                symbol: '$',
                precision: 0,
              }).format()}{' '}
              x {cartProduct.quantity}
            </Text>
            <Text>
              {currency(cartProduct.product.price * cartProduct.quantity, {
                symbol: '$',
                precision: 0,
              }).format()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartProductCard
