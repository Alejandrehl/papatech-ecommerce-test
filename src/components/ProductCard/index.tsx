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
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.typeText}>{product.type}</Text>
        <Text style={styles.nameText}>{product.name}</Text>
        <Text style={styles.priceText}>{product.price}</Text>
      </View>
      <Button
        icon={<FontAwesomeIcon icon={faShoppingCart} size={20} color="white" />}
        iconRight
        title="Add to cart"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
      />
    </View>
  )
}

export default ProductCard
