import React from 'react'
import { Overlay, Text } from 'react-native-elements'

type Props = {
  readonly isVisible: boolean
}

const MiniCartOverlay: React.FC<Props> = ({ isVisible = true }) => {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => console.log('CERRAR CARRITO')}>
      <Text>Hello from Overlay!</Text>
    </Overlay>
  )
}

export default MiniCartOverlay
