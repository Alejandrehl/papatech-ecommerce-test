import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-elements'
import { connect } from 'react-redux'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { showMiniCart } from '../../redux/actions/cart.action'
import { CartProduct } from '../../redux/reducers/cart.reducer'
import { RootState } from '../../store'

import styles from './styles'

type Props = {
  readonly cartProducts: CartProduct[]
  readonly badgeCount: number
  readonly showMiniCart: () => void
}

const HeaderShoppingCart: React.FC<Props> = ({ badgeCount, showMiniCart }) => {
  return (
    <TouchableOpacity onPress={() => showMiniCart()}>
      <FontAwesomeIcon icon={faShoppingCart} size={25} />
      <Badge
        status="warning"
        containerStyle={styles.badge}
        value={badgeCount}
      />
    </TouchableOpacity>
  )
}

const mapStateToProps = (state: RootState) => ({
  cartProducts: state.cart.products,
  badgeCount: state.cart.badgeCount,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  showMiniCart: () => dispatch(showMiniCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderShoppingCart)
