import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'

import Loading from '../../components/Loading/index'
import ProductCard from '../../components/ProductCard'
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
      {loading && (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      )}
      {products && products.length > 0 && (
        <FlatList
          columnWrapperStyle={styles.columWrapper}
          data={products}
          keyExtractor={item => `${item.name}-${item.price}`}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      )}
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
