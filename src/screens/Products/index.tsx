import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

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
      <FontAwesomeIcon icon={faCoffee} />
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
