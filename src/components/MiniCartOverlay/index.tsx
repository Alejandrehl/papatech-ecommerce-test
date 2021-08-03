import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Overlay, Text } from 'react-native-elements'
import { connect } from 'react-redux'

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
  return (
    <Overlay
      isVisible={miniCartVisible}
      onBackdropPress={() => closeMiniCart()}
      overlayStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleText}>
          Tu carrito - {badgeCount} productos
        </Text>
        <View style={{ flex: 1, borderWidth: 1 }}>
          {cartProducts.map((cartProduct: CartProduct) => {
            return (
              <View key={cartProduct.product.id}>
                <Text>{cartProduct.product.name}</Text>
              </View>
            )
          })}
        </View>
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
