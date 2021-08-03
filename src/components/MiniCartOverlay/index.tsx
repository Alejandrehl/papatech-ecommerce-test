import React from 'react'
import { View } from 'react-native'
import { Overlay, Text } from 'react-native-elements'
import { connect } from 'react-redux'

import { closeMiniCart } from '../../redux/actions/cart.action'
import { RootState } from '../../store'

import styles from './styles'

type Props = {
  readonly miniCartVisible: boolean
  readonly badgeCount: number
  readonly closeMiniCart: () => void
}

const MiniCartOverlay: React.FC<Props> = ({
  miniCartVisible,
  badgeCount,
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
      </View>
    </Overlay>
  )
}

const mapStateToProps = (state: RootState) => ({
  miniCartVisible: state.cart.miniCartVisible,
  badgeCount: state.cart.badgeCount,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  closeMiniCart: () => dispatch(closeMiniCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartOverlay)
