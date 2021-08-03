import { StyleSheet } from 'react-native'

const BORDER_COLOR = 'silver'

export default StyleSheet.create({
  container: {
    flex: 1 / 2,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    marginHorizontal: 5,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
})
