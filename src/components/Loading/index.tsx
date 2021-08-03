import React from 'react'
import { View } from 'react-native'
import { LinearProgress } from 'react-native-elements'

import styles from './styles'

const Loading: React.FC = () => {
  return (
    <View style={styles.loading}>
      <LinearProgress color="primary" />
    </View>
  )
}

export default Loading
