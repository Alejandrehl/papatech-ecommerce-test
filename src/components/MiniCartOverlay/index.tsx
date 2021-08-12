import React from 'react'
import { FlatList, View } from 'react-native'
import { Button, Overlay, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import currency from 'currency.js'

import { closeMiniCart } from '../../redux/actions/cart.action'
import { CartProduct } from '../../redux/reducers/cart.reducer'
import { RootState } from '../../store'
import getTotalCart from '../../utils/getTotalCart'
import CartProductCard from '../CartProductCard'

import styles from './styles'

type Props = {
  readonly miniCartVisible: boolean
  readonly badgeCount: number
  readonly cartProducts: CartProduct[]
  readonly closeMiniCart: () => void
}

const MiniCartOverlay: React.FC<Props> = ({
  miniCartVisible,
  badgeCount,
  cartProducts,
  closeMiniCart,
}) => {
  const navigation = useNavigation()

  const goToCheckout = () => {
    closeMiniCart()
    navigation.navigate('checkout')
  }

  return (
    <Overlay
      isVisible={miniCartVisible}
      onBackdropPress={() => closeMiniCart()}
      overlayStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleText}>
          Tu carrito - {badgeCount} productos
        </Text>
        {cartProducts.length < 1 ? (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>Carrito vacio</Text>
          </View>
        ) : (
          <FlatList
            data={cartProducts}
            keyExtractor={item => item.product.id}
            horizontal={false}
            numColumns={1}
            renderItem={({ item }) => <CartProductCard cartProduct={item} />}
          />
        )}
        <Text style={styles.totalText}>
          TOTAL:{' '}
          {currency(getTotalCart(cartProducts), {
            symbol: '$',
            precision: 0,
          }).format()}
        </Text>
        <Button
          title="Realizar compra"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => goToCheckout()}
          disabled={cartProducts.length < 1}
        />
      </View>
    </Overlay>
  )
}

const mapStateToProps = (state: RootState) => ({
  miniCartVisible: state.cart.miniCartVisible,
  badgeCount: state.cart.badgeCount,
  cartProducts: state.cart.products,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  closeMiniCart: () => dispatch(closeMiniCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartOverlay)
