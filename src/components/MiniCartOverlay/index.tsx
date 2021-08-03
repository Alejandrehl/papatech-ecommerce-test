import React from 'react'
import { ScrollView, View } from 'react-native'
import { Avatar, Button, Overlay, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import currency from 'currency.js'

import { closeMiniCart } from '../../redux/actions/cart.action'
import { CartProduct } from '../../redux/reducers/cart.reducer'
import { RootState } from '../../store'

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
  const getTotal = () => {
    let total = 0

    cartProducts.forEach((cartProduct: CartProduct) => {
      total += cartProduct.product.price * cartProduct.quantity
    })

    return total
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
        <ScrollView
          style={{ flex: 1, paddingBottom: '20%', marginVertical: '5%' }}>
          {cartProducts.map((cartProduct: CartProduct) => {
            return (
              <View
                key={cartProduct.product.id}
                style={{
                  borderWidth: 1,
                  padding: '4%',
                  borderRadius: 30,
                  marginBottom: 10,
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Avatar
                    rounded
                    source={{
                      uri: cartProduct.product.image,
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                      {cartProduct.product.name}
                    </Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>
                      {cartProduct.product.type}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    {currency(cartProduct.product.price, {
                      symbol: '$',
                      precision: 0,
                    }).format()}{' '}
                    x {cartProduct.quantity}
                  </Text>
                  <Text>
                    {currency(
                      cartProduct.product.price * cartProduct.quantity,
                      {
                        symbol: '$',
                        precision: 0,
                      },
                    ).format()}
                  </Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
        <Text style={{ textAlign: 'right', paddingBottom: '5%' }}>
          TOTAL:{' '}
          {currency(getTotal(), {
            symbol: '$',
            precision: 0,
          }).format()}
        </Text>
        <Button
          title="Realizar compra"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => console.log('Ir a checkout')}
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
