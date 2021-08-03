import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import { getProducts } from '../../redux/actions/product.action'
import { Product } from '../../redux/reducers/product.reducer'
import { RootState } from '../../store'

import styles from './styles'

type Props = {
  readonly loading: boolean
  readonly products: Product[] | null
  readonly getProducts: () => void
}

const ProductScreen: React.FC<Props> = ({ loading, products, getProducts }) => {
  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log('hello')}
      />
    </View>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.product.loading,
  products: state.product.products,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  getProducts: () => dispatch(getProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
