import React, { useEffect } from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import currency from 'currency.js'

import CartProductCard from '../../components/CartProductCard'
import { payShoppingCart } from '../../redux/actions/cart.action'
import { CartProduct } from '../../redux/reducers/cart.reducer'
import { RootState } from '../../store'
import getTotalCart from '../../utils/getTotalCart'

import styles from './styles'

type Props = {
  readonly badgeCount: number
  readonly cartProducts: CartProduct[]
  readonly payShoppingCart: () => void
}

const CheckoutScreen: React.FC<Props> = ({
  badgeCount,
  cartProducts,
  payShoppingCart,
}) => {
  const navigation = useNavigation()

  useEffect(() => {
    if (badgeCount < 1) navigation.goBack()
  }, [badgeCount])

  const handlePayShoppingCart = () => {
    Alert.alert(
      '¡Compra exitosa!',
      'Enviamos la boleta a tu correo electrónico',
      [{ text: 'OK', onPress: () => payShoppingCart() }],
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Tu carrito - {badgeCount} productos</Text>
      <Text style={styles.totalText}>
        TOTAL:{' '}
        {currency(getTotalCart(cartProducts), {
          symbol: '$',
          precision: 0,
        }).format()}
      </Text>
      <Button
        title="Pagar"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={() => handlePayShoppingCart()}
        disabled={cartProducts.length < 1}
      />
      <FlatList
        data={cartProducts}
        keyExtractor={item => item.product.id}
        horizontal={false}
        renderItem={({ item }) => <CartProductCard cartProduct={item} />}
      />
    </View>
  )
}

const mapStateToProps = (state: RootState) => ({
  badgeCount: state.cart.badgeCount,
  cartProducts: state.cart.products,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  payShoppingCart: () => dispatch(payShoppingCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen)
