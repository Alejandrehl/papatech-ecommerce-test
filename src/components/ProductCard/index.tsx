import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import currency from 'currency.js'

import { addProductToCart } from '../../redux/actions/cart.action'
import { CartProduct } from '../../redux/reducers/cart.reducer'
import { Product } from '../../redux/reducers/product.reducer'
import { RootState } from '../../store'

import styles from './styles'

type Props = {
  readonly product: Product
  readonly cartProducts: CartProduct[]
  readonly addProductToCart: (
    product: Product,
    cartProducts: CartProduct[],
  ) => void
}

const ProductCard: React.FC<Props> = ({
  product,
  addProductToCart,
  cartProducts,
}) => {
  const productPrice = currency(product.price, {
    symbol: '$',
    precision: 0,
  }).format()

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.typeText}>{product.type}</Text>
        <Text style={styles.nameText}>{product.name}</Text>
        <Text style={styles.priceText}>{productPrice}</Text>
      </View>
      <Button
        icon={<FontAwesomeIcon icon={faShoppingCart} size={20} color="white" />}
        iconRight
        title="Add to cart"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={() => addProductToCart(product, cartProducts)}
      />
    </View>
  )
}

const mapStateToProps = (state: RootState) => ({
  cartProducts: state.cart.products,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  addProductToCart: (product: Product, cartProducts: CartProduct[]) =>
    dispatch(addProductToCart(product, cartProducts)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
