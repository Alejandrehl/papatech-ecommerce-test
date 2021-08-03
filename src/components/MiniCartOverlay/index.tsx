import React from 'react'
import { Overlay, Text } from 'react-native-elements'
import { connect } from 'react-redux'

import { closeMiniCart } from '../../redux/actions/cart.action'
import { RootState } from '../../store'

import styles from './styles'

type Props = {
  readonly miniCartVisible: boolean
  readonly closeMiniCart: () => void
}

const MiniCartOverlay: React.FC<Props> = ({
  miniCartVisible,
  closeMiniCart,
}) => {
  return (
    <Overlay
      isVisible={miniCartVisible}
      onBackdropPress={() => closeMiniCart()}
      overlayStyle={styles.container}>
      <Text>Hello from Overlay!</Text>
    </Overlay>
  )
}

const mapStateToProps = (state: RootState) => ({
  miniCartVisible: state.cart.miniCartVisible,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  closeMiniCart: () => dispatch(closeMiniCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartOverlay)
