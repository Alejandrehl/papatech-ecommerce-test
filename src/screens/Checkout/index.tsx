import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

import CartProductCard from '../../components/CartProductCard'
import { CartProduct } from '../../redux/reducers/cart.reducer'
import { RootState } from '../../store'

import styles from './styles'

type Props = {
  readonly badgeCount: number
  readonly cartProducts: CartProduct[]
}

const CheckoutScreen: React.FC<Props> = ({ badgeCount, cartProducts }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Tu carrito - {badgeCount} productos</Text>
      <Button
        title="Pagar"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={() => console.log('PAGAR')}
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

export default connect(mapStateToProps, null)(CheckoutScreen)
