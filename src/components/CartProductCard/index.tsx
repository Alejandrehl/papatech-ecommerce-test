import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import currency from 'currency.js'

import { addProductToCart } from '../../redux/actions/cart.action'
import { CartProduct } from '../../redux/reducers/cart.reducer'
import { Product } from '../../redux/reducers/product.reducer'

import styles from './styles'

type Props = {
  readonly cartProduct: CartProduct
  readonly addProductToCart: (product: Product) => void
}

const CartProductCard: React.FC<Props> = ({
  cartProduct,
  addProductToCart,
}) => {
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
          <View style={styles.topViewContainer}>
            <View>
              <Text style={styles.nameText}>
                {cartProduct.product.name.substring(0, 10)}
              </Text>
              <Text style={styles.typeText}>{cartProduct.product.type}</Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faMinus} size={20} color="red" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{cartProduct.quantity}</Text>
              <TouchableOpacity
                onPress={() => addProductToCart(cartProduct.product)}>
                <FontAwesomeIcon icon={faPlus} size={20} color="green" />
              </TouchableOpacity>
            </View>
          </View>
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  addProductToCart: (product: Product) => dispatch(addProductToCart(product)),
})

export default connect(null, mapDispatchToProps)(CartProductCard)
