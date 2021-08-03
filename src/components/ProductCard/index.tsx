import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Product } from '../../redux/reducers/product.reducer'

import styles from './styles'

type Props = {
  readonly product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <View>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text>{product.name}</Text>
      <Text>{product.type}</Text>
      <Text>{product.price}</Text>
      <Button
        icon={<FontAwesomeIcon icon={faShoppingCart} size={25} />}
        iconRight
        title="Add to cart"
      />
    </View>
  )
}

export default ProductCard
