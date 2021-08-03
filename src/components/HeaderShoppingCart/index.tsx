import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-elements'
import { connect } from 'react-redux'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import styles from './styles'

const HeaderShoppingCart: React.FC = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Desplegar overlay de productos')}>
      <FontAwesomeIcon icon={faShoppingCart} size={25} />
      <Badge status="warning" containerStyle={styles.badge} value={0} />
    </TouchableOpacity>
  )
}

export default connect(null, null)(HeaderShoppingCart)
